import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { PostMessage } from '../../shared/types'
import postApi from '../../services/postApi'
import axios from 'axios'

// Define a type for the slice state
interface Post {
    Post: PostMessage
    err: String,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialPost: PostMessage = {
    title: '',
    message: '',
    creator: '',
    tags: [''],
    selectedFile: '',
    likeCount: 0,
    createAt: new Date('00/00/0000'),
}

// Define the initial state using that type
const initialState: Post = {
    Post: initialPost,
    err: '',
    loading: 'idle'
}


// fetch all posts from api /fetchPosts
export const fetchPosts = createAsyncThunk(
    'Posts/fetchPosts',
    async () => {
      const response = await axios.get('http://localhost:5004/posts')
      return response.data
    }
  )

export const postSlice = createSlice({
  name: 'postMessage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMessage: (state, action: PayloadAction<PostMessage>) => {
      state.Post = action.payload
      state.err = '';
      state.loading = 'succeeded';
    },
  },
  extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.Post= action.payload;
        })
        .addCase(fetchPosts.pending, (state, action) => {
          state.loading= 'pending'
      })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.err= 'rejected';
          console.log('rejected')
})
  },
})

export const { setMessage } = postSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const postSelector = (state: RootState) => state

export const postReducer = postSlice.reducer


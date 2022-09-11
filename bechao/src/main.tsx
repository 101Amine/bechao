import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import App from './App'
import { Form } from './components/Form/Form'
import { Post } from './components/Posts/Post'
import './index.css'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/form" element={<Form/>} />
            <Route path="/post" element={<Post/>} />
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>

  
)

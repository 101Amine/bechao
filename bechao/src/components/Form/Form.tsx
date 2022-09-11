import React, { useEffect } from 'react'
import { useAppSelector } from '../../Hooks/hooks';
import { postSelector } from '../../store/slices/postSlice';

export const Form = () => {
  const postData = useAppSelector(postSelector); 

  useEffect(() => {
    console.log(postData)
  },postData)


  return (
    <div>Form</div>
  )
}

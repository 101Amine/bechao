import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { Form } from './components/Form/Form'
import { store } from './store/store'
import {
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import AppRoute from './routes/AppRoutes';
import { routes } from './routes/routes';
import { Post } from './components/Posts/Post'



function App() {
  
  
  return (
   <div>
    App
   </div>
  )
}

export default App

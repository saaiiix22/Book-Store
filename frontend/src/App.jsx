import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import DefaultPage from './component/02-DefaultPage/DefaultPage'
import Items from './component/03-Items/Items'
import Login from './component/04-Login/Login'
import SignUp from './component/05-SignUp/Signup'
import EachBook from './component/06-EachBook/EachBook'
import MainBody from './component/02-DefaultPage/MainBody'
import Order from './component/08-Order/Order'
import CheckOut from './component/10-Checkout/Checkout'


function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<DefaultPage/>,
      children:[
        {
          index:true,
          element:<MainBody/>
        },
        {
          path:"/items",
          element:<Items/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
        {
          path:"/eachbook/:id",
          element:<EachBook/>
        },
        {
          path:"/order",
          element:<Order/>
        },
        {
          path:"/checkout",
          element:<CheckOut/>
        }
      ]
    }
  ])

  return (
    <div className='h-[100vh] w-[100%] p-0 m-0 box-border'>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App

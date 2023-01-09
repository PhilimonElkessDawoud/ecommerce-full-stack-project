import './App.css'
import { createBrowserRouter, RouterProvider, Navigate, children } from "react-router-dom";

import {Header, Container, Footer, Hero, Form, SingleProduct, NotFound} from './sections/index'
import {Category, Product, FormSignUp, FormEmail, FormPassword, ProfileHeader} from './components/index'
import {RootLayout, GuestLayout} from './layouts/index';
//import { Children } from 'react';

export default function App(){

    const router = createBrowserRouter([
        {
          path: '/',
          element: <RootLayout/>,
          children: [
            {
              path: '/',
              element: <Navigate to="/Hero"/>
            },

            {
              path: '/Hero',
              element: <Hero/>
            },

            {
              path: '/SingleProduct',
              element: <SingleProduct />
            },
          ]
        },
        {
          path: '/',
          element: <GuestLayout/>,
          children: [
            {
              path: '/SignUp',
              element: <FormSignUp/>
            },
            {
              path: '/Email',
              element: <FormEmail/>
            },
            {
                path: '/Password',
                element: <FormPassword/>
            }
          ]
        },
        {
          path: "*",
          element: <NotFound/>
        }
      ]

        // createRoutesFromElements(
            
        //         <Route path='/' element={<RootLayout/>}>
        //             <Route index element={<Hero/>}/>
        //             <Route path='SingleProduct' element={<SingleProduct/>}/>

        //             <Route path='Form' element={<GuestLayout/>}>
        //                 <Route path='FormSignUp' element={<FormSignUp/>}/>
        //                 <Route path='FormEmail' element={<FormSignUp/>}/>
        //                 <Route path='FormPassword' element={<FormSignUp/>}/>
        //             </Route>
        //         </Route>     
        // )
    )
    
    return(
        <RouterProvider router={router}/>
        // <Header/>
    )
}
import { useState } from 'react'

import './App.css'
import QrScannerComponent from './Home'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Clue } from './pages/Clue'
import { RecoilRoot } from 'recoil'

function App() {
 

const router = createBrowserRouter([
  {
    path:"/",
    element:<QrScannerComponent/>
  },
  {
    path:"/start",
    element:<QrScannerComponent/>
  },
  {
    path:"/Next",
    element:<Clue></Clue>
  }
])

  return (
    <>
    <RecoilRoot>

  <RouterProvider router={router}/>
    </RecoilRoot>
      
    </>
  )
}

export default App

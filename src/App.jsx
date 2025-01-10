import React from 'react'
import './index.css'
import { useRoutes } from 'react-router'
import Home from './pages/Home/Home'
import routes from './routes'
import Sidebar from './components/sidebar/sidebar'
import TopBar from './components/topbar/TopBar'
export default function App() {
  let router=useRoutes(routes)
  return (
    <div>
      <TopBar/>
      <div className='container m-0'>
        <Sidebar/>
      {router}
      </div>
    </div>
  )
}

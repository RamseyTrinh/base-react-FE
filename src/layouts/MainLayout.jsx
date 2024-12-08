import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'

const MainLayout = () => {

  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout

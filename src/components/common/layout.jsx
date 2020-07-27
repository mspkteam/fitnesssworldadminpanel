/* eslint-disable react/prop-types */
import React from 'react'
import Appbar from './appbar'
import Drawer from './drawer'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleIsOpen = () => {
    setIsOpen(true)
  }

  const handleOnClose = () => {
    setIsOpen(false)
  }
  return (

    <>
      <Appbar isOpenDrawer={handleIsOpen} />
      <Drawer isOpen={isOpen} onCloseDrawer={handleOnClose}>
        {children}
      </Drawer>
    </>

  )
}
export default Layout

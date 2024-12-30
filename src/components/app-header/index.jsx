import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HeaderLeft from './cps/header-left'
import HeaderCenter from './cps/header-center'
import HeaderRight from './cps/header-right'

const AppHeader = memo(() => {
  return (
    <HomeWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HomeWrapper>
  )
})

export default AppHeader

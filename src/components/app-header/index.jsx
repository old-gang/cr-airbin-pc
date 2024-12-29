import React, { memo } from 'react'
import { HomeWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HomeWrapper>
      <div className="left">left</div>
      <div className="center">center</div>
      <div className="right">right</div>
    </HomeWrapper>
  )
})

export default AppHeader

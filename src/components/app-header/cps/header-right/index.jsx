import React, { memo, useState } from 'react'
import { RightWrapper } from './style.js'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  const handlePanel = () => {
    setShowPanel(!showPanel)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={handlePanel}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight

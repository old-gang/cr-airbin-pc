import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './cps/home-banner/index'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '../../store/modules/home'
import SectionHeader from '../../components/section-header'
import SectionRooms from '../../components/section-rooms'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home

import React, { memo, useEffect } from 'react'
import hyRequest from '@/services/request'

const Home = memo(() => {
  useEffect(() => {
    hyRequest
      .get({
        url: '/home/highscore'
      })
      .then((res) => {
        console.log(res)
      })
  }, [])

  return <div>Home</div>
})

export default Home

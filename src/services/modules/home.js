import hyRequest from '..'

export const getHomeGoodPriceData = () => {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}

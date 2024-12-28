import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App

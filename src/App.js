import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Page/Home/Home'
import Video from './Page/Video/Video'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
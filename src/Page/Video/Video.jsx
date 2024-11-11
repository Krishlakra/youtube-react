import React from 'react'
import './Video.css'
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recomened from '../../Component/Recomended/Recomened'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recomened categoryId={categoryId}/>
    </div>
  )
}

export default Video
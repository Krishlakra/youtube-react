import React, { useState } from 'react'
import './recomended.css'
import Yours from '../../assets/Yours.png'
import Years from '../../assets/7 Years.png'
import Dev from '../../assets/DevXD.png'
const Recomened = ({categoryId}) => {
 const [apiData,setApiData]=useState([]);

 const fetchData = async() =>{

    const relatedVideo =  `http`
 }
  return (
    <div className='recomended'>
      <div className="side-video-list">
        <img src={Yours} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Years} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Dev} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Yours} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Years} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Dev} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Yours} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Years} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={Dev} alt="" />
        <div className="video-info">
          <h4>I Wanna Be Yours - Arctic Monkeys </h4>
          <p>bluebell</p>
          <p>2.8M views &bull; 7 months ago</p>
        </div>
      </div>
    </div>
  )
}

export default Recomened
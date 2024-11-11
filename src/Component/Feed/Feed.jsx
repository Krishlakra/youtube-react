import React, { useEffect, useState } from 'react'
import './Feed.css'
import fukra from '../../assets/fukra.png'
import Yours from '../../assets/Yours.png'
import Years from '../../assets/7 Years.png'
import Dev from '../../assets/DevXD.png'
import Smarty from '../../assets/Smarty.png'
import Ronie from '../../assets/RONIE.png'
import Purav from '../../assets/PURAV JHA.png'
import Sharma from '../../assets/Sharma.png'
import Code from '../../assets/Code.png'
import Dev1 from '../../assets/Dev@.png'
import Hub from '../../assets/Hub.png'
import Long from '../../assets/Long time.png'
import Timi from '../../assets/Timi.png'
import Timro from '../../assets/Timiro.png'
import Dog from '../../assets/Dog.jpeg'
import EPL from '../../assets/EPL.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    const fetchData = async async => {
        const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        // await fetch(videoList_url).then (response=>response.json()).then(data=>setData(data.item))
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items));
    }

    useEffect(()=>{
      fetchData();
    },[category])
    return (
        <div className='feed'>
            {data.map((item,index)=>{
                return(
                    <Link to={`video/${item.snippet.categoryID}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.medium.url} alt="fukra" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull;{moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            
                )
            })}
           
        </div>

    )
}

export default Feed
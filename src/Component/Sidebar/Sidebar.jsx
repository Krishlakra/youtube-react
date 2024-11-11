import React from 'react'
import './Sidebar.css'
import Home from '../../assets/home.png'
import Video from '../../assets/video.png'
import display from '../../assets/display.png'
import user from '../../assets/user.png'
import history from '../../assets/history.png'
import watch from '../../assets/watch.png'
import trending from '../../assets/trending.png'
import music from '../../assets/music.png'
import game from '../../assets/game.png'
import setting from '../../assets/settings.png'
import report from '../../assets/report.png'
import help from '../../assets/help.png'
import feedback from '../../assets/feedback.png'



const Sidebar = ({sidebar,category,setCategory})=>{
    return ( 
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='shortcut-links'>
            <div className={`side-link ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
                    <img src={Home} alt="home" className='home' /><p>Home</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={Video} alt="home" className='home' /><p>Shorts</p>
                </div>
                <div className="side-link">
                    <img src={display} alt="display" className='home' /><p>Subscriptions</p>
                </div>
                <hr />
                <div className='yours'>
                    <h3 className='hlo'>You</h3>
                    <div className="side-link">
                        <img src={user} alt="user" className='home' /><p>Your channel</p>
                    </div>
                    <div className="side-link">
                        <img src={history} alt="history" className='home' /><p>History</p>
                    </div>
                    <div className="side-link">
                        <img src={watch} alt="watch" className='home' /><p>Watch later</p>
                    </div>
                </div>
                <hr />
                <div className='Explore'>
                    <h3 className='hlo'>Explore</h3>

                    <div className={`side-link ${category===26?"active":""}`} onClick={()=>setCategory(26)}>
                        <img src={trending} alt="trending" className='home' /><p>Trending</p>
                    </div>
                    <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                        <img src={music} alt="music" className='home' /><p>Music</p>
                    </div>
                    <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                        <img src={game} alt="game" className='home' /><p>Gaming</p>
                    </div>
                </div>
                <hr />
                <div className="side-link">
                    <img src={setting} alt="setting" className='home' /><p>Setting</p>
                </div>
                <div className="side-link">
                    <img src={report} alt="report" className='home' /><p>Report</p>
                </div>
                <div className="side-link">
                    <img src={help} alt="help" className='home' /><p>Help</p>
                </div>
                <div className="side-link">
                    <img src={feedback} alt="feedback" className='home' /><p>Feedback</p>
                </div>
            </div>
     
            </div>
        
        )
    }

export default Sidebar
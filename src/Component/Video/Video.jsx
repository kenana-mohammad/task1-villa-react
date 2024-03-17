import React from 'react'
import "./Video.css"
import vedio from "../../assets/video-frame.jpg"
import FunFact from '../FunFact/FunFact'
const Video = () => {
    const data=[
        {
            num:34,
            title:" Buildings",
            text:"Finished Now",
        }
        ,
        {
            num:12,
            title:" Years",
            text:"Experience",
        },
        {
            num:34,
            title:"  Awwards ",
            text:"Won 2023",
        }
    ]
  return (
    <>
    <div className='video-section'>
<div className="container-video">
    <div className="row-vedio">
        <div className="col-4-vedio">
            <div className="heading-vedio">
                <h6> | Video View</h6>
                <h2> Get Closer View & Different Feeling</h2>
            </div>
        </div>
    </div>
</div>
    </div>
    <div className="vedio-content">
        <div className="container-vedio-content">
            <div className="row-vedio-content">
                <div className="col-10-vedio">
                    <div className="vedio-frame">
                        <img src={vedio} alt="" />
                        <a href="https://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FunFact data={data}/>
    </>
  )
}

export default Video
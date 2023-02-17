import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from "../store/appContext";

const Details = () => {

const {store} = useContext(Context)
    let params = useParams()
    console.log(params)
    
  return (
    <div className='details-main'>
      <div className='details-title'>
        <h2 className='mb-4'>{store.demo[params.index].title}</h2>
        <div className='underline'></div>
      </div>
      <div className='details-image-container'>
        <img src={store.demo[params.index].img} className='details-image'/>
      </div>
      <div className='details-desc'>
        <h5>{store.demo[params.index].desc}</h5>
        <h5>{store.demo[params.index].price}</h5>
      </div>
    </div>
  )
}

export default Details

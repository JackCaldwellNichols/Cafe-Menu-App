import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Context } from "../store/appContext";

const Menu = ({items}) => {


   
  return (
    <div className='section-center'>
        {
            items.map((item, index)=>{
                const {id, title, img, desc, price} = item
                console.log(item.img)
                return (
                    <article key={id} className='menu-item'>
                        <Link to={`/info/${index}`}>
                            <img src={img} alt={title} className='photo' />
                       </Link>
                    <div className='item-info'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>{price}</h4>
                        </header>
                        <p className='item-desc'>{desc}</p>
                    </div>
                </article>
                )
            })
        }
    </div>
  )
}

export default Menu

import React, {useState, useContext} from 'react';
import '../../styles/home.css';
import Category from '../component/Category';
import Menu from '../component/Menu';
import items from '../data.js'
import { Context } from "../store/appContext";




function Home() {
const {store} = useContext(Context)
const allCategories = ['all', ...new Set(store.demo.map((item)=> item.category))]



const [menuItems, setMenuItems] = useState(items)

const [categories, setCategories] = useState(allCategories)

const filterItems = (category) => {
  if (category === 'all'){
    setMenuItems(items)
    return
  }
  const newItems = store.demo.filter((item) => item.category === category)
  setMenuItems(newItems)
}

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Category categories={categories} filterItems={filterItems}/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default Home;
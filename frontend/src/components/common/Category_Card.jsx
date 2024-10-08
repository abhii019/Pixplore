import React from 'react'
import { Link } from 'react-router-dom';
import "../../cssFiles/CategoryCard.css"



const Category_Card = ({category}) => {
  return (
    
    <Link to={`category/${category._id}`} className='transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <div className='w-[450px] h-[330px] bg-cover bg-center bg-no-repeat flex justify-center items-end pb-6 relative rounded-[30px] m-2'  
        style={{ backgroundImage: `url(${category.thumbnail})` }}>

            <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>

            <div className='relative text-white flex flex-col items-center justify-center'>
                <p className='font-bold'>{category.description}</p>
                <h2 className='text-3xl font-bold'>{category.title}</h2>
            </div>
        </div>
    </Link>
    
  )
}

export default Category_Card
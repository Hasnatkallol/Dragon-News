import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(res => res.json())

const Allcategory = () => {
    const categories = use( categoriesPromise )
    return (
        <div>
           <h2 className='font-bold mb-5 text-2xl'> All Category</h2>
           <div className='grid grid-cols-1 gap-5'>
             {
                categories.map(category => 
                    <>
                    <NavLink key={category.id}
                    className={'btn bg-base-100 border-0 hover:bg-base-200'}
                     to={`/category/${category.id}`}
                     >{category.name}</NavLink>
                    </>
                )
             }
           </div>
        </div>
    );
};

export default Allcategory;
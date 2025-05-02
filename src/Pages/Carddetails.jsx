import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Rightaside from './Rightaside';
import { useLoaderData, useParams } from 'react-router';
import Single from './Single';


const Carddetails = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const [ news, setNews ] = useState({})
   
    
    useEffect(()=>{
        const filterNews = data.find(item => item.id == id)
        setNews(filterNews)
    },[data,id])

   
    

   
    

    return (
        <div className='w-11/12 mx-auto'>
           <header className='py-2'>
             <Header></Header>
           </header>
           <main className='grid grid-cols-12 gap-10'>
           <aside className='col-span-9'>
            <h2 className='font-bold mb-8 text-2xl'>Dragon News </h2>
            <Single news={news}></Single>
           </aside>
           <aside className='col-span-3 sticky top-2 h-0'>
               <Rightaside></Rightaside>
            </aside>
           </main>
        </div>
    );
};

export default Carddetails;
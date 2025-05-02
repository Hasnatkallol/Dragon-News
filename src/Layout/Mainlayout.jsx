import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';
import Leftaside from '../Pages/Leftaside';
import Rightaside from '../Pages/Rightaside';


const Mainlayout = () => {
    return (
        <div>
          <header>
            <Header></Header>
            <Marque></Marque>
            <section className="navbar">
                 <Navbar></Navbar>
            </section>
          </header>
          <main className='w-11/12 mx-auto grid-cols-12 grid gap-5'>
            <aside className='col-span-3 sticky top-2 h-0'>
               <Leftaside></Leftaside>
            </aside>
             <section className="main col-span-6 ">
                <Outlet></Outlet>
             </section>
             <aside className='col-span-3 sticky top-2 h-0'>
               <Rightaside></Rightaside>
            </aside>
          </main>
        </div>
    );
};

export default Mainlayout;
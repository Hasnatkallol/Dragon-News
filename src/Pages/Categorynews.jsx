import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './Newscard';







const Categorynews = () => {
    const [ categoriesNews,setCategoriesNews  ] = useState([])
    const data = useLoaderData()
    const {id} = useParams()
    useEffect(()=>{
        const filterData = data.filter(item => item.category_id == parseInt(id))

        if(parseInt(id) === 0){
            setCategoriesNews(data)
            return
        }

        if(parseInt(id) === 1){

            const filterData = data.filter(news=> news.others.is_today_pick == true)
            setCategoriesNews(filterData)
            return
        }

    
      
        setCategoriesNews(filterData)
    },[data,id])
    return (
        <div>
           
            <div>
                {
                    categoriesNews.map((news,index) => <NewsCard news={news} key={index}></NewsCard>
                    )
                }
            </div>
        </div>
    );
};

export default Categorynews;
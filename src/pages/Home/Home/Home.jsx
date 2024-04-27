import NewsSummaryCard from '@/pages/Shared/NewsSummaryCard/NewsSummaryCard'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const allNews = useLoaderData()
  return (
    <div>
      {
        allNews.map(news => <NewsSummaryCard key={allNews._id} news={news}/>)
      }
    </div>
  )
}

export default Home
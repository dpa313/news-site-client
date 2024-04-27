import NewsSummaryCard from '@/pages/Shared/NewsSummaryCard/NewsSummaryCard'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Category = () => {
  const categoryNews = useLoaderData()

  console.log(categoryNews);
  return (
    <div>
      {
        categoryNews.map(news => <NewsSummaryCard key={categoryNews._id} news={news} />)
      }
    </div>
  )
}

export default Category
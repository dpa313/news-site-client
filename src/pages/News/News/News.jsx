import { Button } from "@/components/ui/button";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details } = news;
  return (
    <section className="pb-10">
      <div className="p-4  md:w-full space-y-5 border-2 border-gray-200  border-opacity-60  rounded-md">
        <div className="h-full  overflow-hidden">
          <img
            className="lg:h-96 md:h-64 w-full object-cover object-center"
            src={image_url}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed ">{details}</p>
          </div>
          <Link to={`/category/${news.category_id}`}>
            <Button>All news in this category</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;

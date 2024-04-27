import {
  ArrowRightIcon,
  BookmarkFilledIcon,
  EyeOpenIcon,
  Share1Icon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const {_id, title, author, details, image_url, total_view, rating } = news;
//   console.log(news);
  return (
    <section className="pb-10">
      <div className="p-4  md:w-full space-y-5 border-2 border-gray-200  border-opacity-60  rounded-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={author?.img}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold leading-none">
                {author?.name}
              </h4>
              <span className="text-xs text-gray-500">
                {author?.published_date}
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Share1Icon className="cursor-pointer" />
            <BookmarkFilledIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="h-full  overflow-hidden">
          <img
            className="lg:h-96 md:h-64 w-full object-cover object-center"
            src={image_url}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed ">
              {details.length > 250 ? (
                <p>
                  {details.slice(0, 250) + "..."}{" "}
                  <div className="flex items-center flex-wrap pt-5 ">
                    <Link
                      to={`/news/${_id}`}
                      className="text-indigo-500 inline-flex items-center"
                    >
                      Read More
                      <ArrowRightIcon />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex gap-1 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <EyeOpenIcon /> {total_view}
                    </span>
                    <span className="text-gray-400 inline-flex items-center gap-1 leading-none text-sm">
                      <StarFilledIcon className="text-orange-400" />
                      {rating.number}
                    </span>
                  </div>
                </p>
              ) : (
                <p>{details}</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSummaryCard;

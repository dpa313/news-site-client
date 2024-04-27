import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/news-categories");
      const data = await response.json();

      if (data) {
        setCategories(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...Please wait !!!</div>;
  }

  // console.log(categories);
  return (
    <div>
      {categories && categories.length
        ? categories.map((category) => (
            <div key={category.id}>
              <ul>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </ul>
            </div>
          ))
        : null}
    </div>
  );
};

export default LeftSideNav;

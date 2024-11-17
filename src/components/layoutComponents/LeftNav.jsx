import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoris(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold mb-3">All Category</h1>
      <div className="flex flex-col text-center gap-3 justify-center items-center border-b">
        {categoris?.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className=" btn flex w-full bg-inherit border-none"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;

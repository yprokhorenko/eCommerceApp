import { useState } from "react";
import List from "../components/List";
import "./Products.scss";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const data = [
  {
    id: 1, title: "Hat", isNew: true, price: 12, oldPrice: 20, img1: "https://i.ibb.co/wcR8df2/hat1.png", img2: "https://i.ibb.co/x2Jmt4P/hat1-2.png"
  },
  {
    id: 2, title: "Shirt", isNew: false, price: 25, oldPrice: 30, img1: "https://i.ibb.co/0Gy0kyb/shirt1.png", img2: "https://i.ibb.co/2Fht0fS/shirt1-2.png"
  },
  {
    id: 3, title: "Pants", isNew: true, price: 35, oldPrice: 50, img1: "https://i.ibb.co/yNgCGCH/pants1.png", img2: "https://i.ibb.co/X7k1sH0/pants1-2.png"
  },
  {
    id: 4, title: "Shoes", isNew: false, price: 60, oldPrice: 80, img1: "https://i.ibb.co/cDNNj9Q/shoes1.png", img2: "https://i.ibb.co/Z80YSh3/shoes1-2.png"
  },
]

export default function Products()  {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    console.log(selectedSubCats)
  };

  return (
    <div className="products">
      <div className="products_left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="products_right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

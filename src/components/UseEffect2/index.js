import { useEffect, useState } from "react";
import Products from "./product";
import "./UseEffect2.scss";

function UseEffect2() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setdata(data.products);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="product_list">
        {(data || []).map((item) => (
          <Products item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
}
export default UseEffect2;

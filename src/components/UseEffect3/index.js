import { useEffect, useState } from "react";
import Products from "./product";
import "./UseEffect3.scss";

function UseEffect3() {
  const limit = 10;
  const [data, setdata] = useState([]);
  const [quanlityPage, setQuanlityPage] = useState(0);
  const [pageActive, setpageActive] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setdata(data.products);
        setQuanlityPage(Math.ceil(data.total/ limit));
      });
  }, [pageActive]);
  //   console.log(data);
  const handleClickPagination = (e) => {
    // console.log(e);
    setpageActive(e);
  };
//   console.log(quanlityPage);
  return (
    <>
      <div className="product_list">
        {(data || []).map((item) => (
          <Products item={item} key={item.id} />
        ))}
      </div>

      <ul className="pagination">
        {[...Array(quanlityPage)].map((_,index)=>(
            <li onClick={()=> handleClickPagination(index)} key={index}>{index+1}</li>
        ))}
      </ul>
    </>
  );
}
export default UseEffect3;

import "./Tabs.scss"
import { useEffect,useState } from "react";

function Tabs(){
  const [data, setdata] = useState([]);
  const [tabActive, settabActive] = useState("products");
  
  useEffect(()=>{
    fetch(`https://dummyjson.com/${tabActive}`)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data.products);
        setdata(data[tabActive]);
      })
  },[tabActive]);

  const handleChangeTab=(e)=>{
    settabActive(e);
  }
  // console.log(data);
  return (
    <>
      <div className="tabs">
        <div className="tabs_item" onClick={()=>handleChangeTab("products")}> Products</div>
        <div className="tabs_users" onClick={()=>handleChangeTab("users")}> Users</div>
        <div className="tabs_Pots" onClick={()=>handleChangeTab("posts")}> Posts</div>
      </div>
      <div className="tabs_content">
        <ul>
          {data.map(item=>(
            <li key={item.id}>
              {item.title || (item.firstName +" "+ item.lastName)}
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}
export default Tabs;
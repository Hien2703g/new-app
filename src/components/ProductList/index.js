import { productList } from "../data/products";
import ProductItem from "./Productitem";

function ProductList() {
  // console.log(productList);
  return (
    <>
      <div className="product_list">
        {productList.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
}
export default ProductList;
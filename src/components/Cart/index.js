import "./Cart.scss";
import {useState} from "react";
function Cart() {
  const unitPrice=12000;
  const [quantity, setquantity] = useState(1);
  const handleChange=(e)=>{
    // console.log(e);
    const update = parseInt(e.target.value);
    setquantity(update);
  }
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng sản phẩm</th>
            <th> Đơn giá</th>
            <th> Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Giày thể thao</td>
            <td>
              <input
                defaultValue={quantity}
                type="number"
                min={1}
                onChange={handleChange}
              />
            </td>
            <td>{unitPrice}$</td>
            <td> {unitPrice * quantity}$</td>
          </tr>
        </tbody>
      </table>
    </>
  ); 
}
export default Cart;

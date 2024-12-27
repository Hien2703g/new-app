function Products(props){
    const {item}=props;
    return (
      <>
        <div className="product_item" >
          <div className="product_img">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <h3 className="product_title">Tieu de san pham: {item.title}</h3>
          <div className="product_price">Gia: {item.price}$</div>
        </div>
      </>
    );
}
export default Products;
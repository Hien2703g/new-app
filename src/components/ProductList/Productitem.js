function ProductItem(props){
    const {item}=props;
    return (
        <>
            <div className="product_item">
                <img className="prodct_image" src={item.thumbnail} alt={item.title}></img>
                <h3 className="product_name">{item.title} </h3>
                <div className="product_price">Mo ta san pham: {item.description}</div>
                <div> {item.price}</div>
            </div>
        </>
    );
}
export default ProductItem;
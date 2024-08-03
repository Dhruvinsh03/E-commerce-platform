import "./header.css";
import"../UI/Modal";
function Header({openCart,openAddProduct}){
     return(
        <div className="header">
            <h1>My React Store</h1>
            <button className="yellow-button" onClick={openAddProduct} style={{ marginRight:"20px" }}>Add Product</button>
            <button className="yellow-button" onClick={openCart}>Cart</button>
        </div>
    );
}
export default Header;
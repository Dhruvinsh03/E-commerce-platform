import {useState} from "react";
import Modal from '../UI/Modal';
import './AddProduct.css';

function AddProduct({showAddProduct,closeAddProduct,onAddProduct}){
    const[productName,setProductName]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        onAddProduct(productName)
    }

    const handleProductNameChange = (event) =>{
        const enteredName=event.target.value;
        setProductName(enteredName);
    };
    return(
        <Modal show={showAddProduct} onClose={closeAddProduct}>
            <div className='add-product-container'>
                <p className='add-product-heading'>Add Product</p>
                <form onSubmit={handleSubmit} className='add-product-form'>
                    <label className='form-label'>Enter Product Name</label>
                    <input className='form-input' name="Product Name" value={productName} on onChange={handleProductNameChange}></input>
                    <button className='submit-button yellow-button' type='submit'>Add Product</button>
                </form>



            </div>

        </Modal>
    )

}

export default  AddProduct;
import React from "react";
import Product from "./ProductComponent";


const Products = ({products}) => {

    const renderedProducts = products.map(product => (
        <div key={product.id} className="col-10 col-sm-8 col-md-6 mt-3">
            <Product product={product} />
        </div>
    ));

    return (
        <div className="container">
            <div className="row justify-content-center">
                {renderedProducts}
            </div>
        </div>
    );
};

export default Products;

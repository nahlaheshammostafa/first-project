import Button from './Button';

function Product(props) {
    return (
        <div className="product-card">
            <h1>Product Component</h1>
            <p>Name: {props.name}</p>
            <p>Price: ${props.price}</p>
            <Button title="Add to Cart" />
        </div>
    );
}

export default Product;
import './InfoProduct_main.css'
import Product from '../../component/Product/Product'

function OthersProduct () {
    return (
        <>
            <div className='others_product-title'>Sản phẩm khác của shop</div>
            <div className='grid__row others_product-container'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <a href='/' className='others-product'>Xem thêm sản phầm</a>
        </>
        
    )
}

export default OthersProduct
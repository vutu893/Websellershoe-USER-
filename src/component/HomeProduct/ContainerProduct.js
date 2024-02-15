import './HomeProduct.css'
import Product from '../Product/Product'
import Pagination from './Pagination'

function ContainerProduct() {
    return (
       <div className='grid__column-10'>
            <div className='home_product-container'>
                <div className='grid__row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>              
            </div>
            <Pagination />
       </div>
    )
}

export default ContainerProduct
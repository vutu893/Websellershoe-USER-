import './HomeProduct.css'
// import Header from '../../component/Header/Header'
// import Footer from '../../component/Footer/Footer'
import ContainerProduct from './ContainerProduct'
import SibarHomeProduct from './SibarHomeProduct'

function HomeProduct() {
    return (          
        <div className='main_home-product'>
            <div className='grid home_product'>
                <div className='grid__row'>
                    <SibarHomeProduct />
                    <ContainerProduct />
                </div>
            </div>
        </div>
    )
}

export default HomeProduct
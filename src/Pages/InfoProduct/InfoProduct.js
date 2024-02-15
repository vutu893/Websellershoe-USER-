import './InfoProduct_main.css'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Displayproduct from './displayProduct'
import DescriptionProduct from './DescriptionProduct'
import OthersProduct from './OthersProduct'
import FeedbackProduct from './FeedbackProduct'

function InfoProduct() {
    return (
        <>
            <Header />
            <div className='grid info_container'>
                    <a href='/'className='info_container-sibar'>
                        <i className="fa-solid fa-house info_container-sibar-icon"></i>
                        <a href='/' className='info_container-sibar-btn'>/HOME</a>
                    </a>
                    <Displayproduct />
                    <DescriptionProduct />
                    <OthersProduct />
                    <FeedbackProduct />
            </div>
            <Footer />
        </>    
    )
}

export default InfoProduct
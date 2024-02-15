import './Bodypage.css'
import Product from '../../../component/Product/Product'
import HomeProduct from '../../../component/HomeProduct/HomeProduct'

function Bodypage() {
    return (
        <>
            <div className='page-welcom'>
                <div className='page-text'>
                        <h1>Welcom to H3T shop</h1>
                        <span>Chúng tôi sẽ đem đến cho các bạn những đôi giày tuyệt vời nhất</span>
                </div>
            </div>
    
            <div className="grid about_me"> 
                <h1 className='about_me-title'>ABOUT ME</h1>
                <div className='grid_row'>
                    <div className='content'>
                        <img src='https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-lam-viec-nhom-dep.jpg' alt='' className='content-img'></img>
                        <p className='content-text'>
                            Bỏ lỡ vào Thứ Sáu Đen tối? Đừng tuyệt vọng—Khuyến mãi cuối năm của chúng tôi đang trực tiếp. 💥
                            Cuộc cách mạng dữ liệu và công nghệ AI sẽ xác định cách hoạt động của doanh nghiệp trong năm 2024. Đảm bảo bạn có kỹ năng để thành công bằng cách đảm bảo giảm 50% dữ liệu không giới hạn và học AI trong 12 tháng.
                            Bao gồm:… Xem thêm
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid sales_page'>
                <h1 className='sales_page-title'>TOP SALES</h1>
                <div className='grid__row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='footer-page-sales'>
                    <a href='/'className='footer-page-content'>Xem chi tiết tất cả sản phẩm của shop</a>
                    <a href='/' className='footer-page-icon'><i class="fa-solid fa-angles-down "></i></a>
                </div>
            </div>

            <div className='grid outstanding_products'>
                <h1 className='outstanding_products-title'>Những sản phẩm nổi bật</h1>
                <div className ='grid__row outstanding_products-bands'>
                    <span className='outstanding_products-item'>NIKE</span>
                    <span className='outstanding_products-item'>ADIDAS</span>
                    <span className='outstanding_products-item'>GUCI</span>
                    <span className='outstanding_products-item'>JODAN</span>
                    <span className='outstanding_products-item'>VALENCIA</span>
                </div>
                <div className='grid__row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='footer-outstanding-product'>
                        <a href='/'className='footer-page-content'>Xem chi tiết tất cả sản phẩm của shop</a>
                        <a href='/' className='footer-page-icon'><i class="fa-solid fa-angles-down "></i></a>
                </div>
            </div>

            <HomeProduct />
        </>
    )
}

export default Bodypage
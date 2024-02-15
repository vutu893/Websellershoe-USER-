import './Product.css'

function Product(props) {
    return (
            <div className='grid-column-2-4'>
                <a className='product' href='/infoproduct'>
                    <div className='product-img' >
                        <img alt='' src='https://tse1.mm.bing.net/th?id=OIP.AYOmL08MEwkdhdnN5AMv2gHaHa&pid=Api&P=0&h=180'></img>
                    </div>
                    <div>
                        <div className ='product-name'>hello worldDép Nữ Nơ Chữ Độn Đế Răng Cưa Siêu Cấp Dép Nữ Nơ Chữ Độn Đế Răng Cưa Siêu Cấp</div>

                        <div className='product-price'>
                            <span className='price-old'>2.000.000$</span>
                            <span className='price-current'>1.000.000$</span>
                        </div>

                        <div className='product-sold'>Sold 68</div>
                        <div className='product-sales'>
                            <span className='product-sales-off-label'>-</span>
                            <span className='product-sales-off-percent'>10%</span>
                        </div>
                    </div>
                </a>
             </div>
    )
}
export default Product
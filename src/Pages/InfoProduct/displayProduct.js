import './InfoProduct_main.css'
import { useState } from 'react'
function Displayproduct() {

    const [quantity,setQuantity] = useState(0)
    const [like, setLike] = useState(true)
    const [quantityLike, setQuantityLike] = useState(100)

    const handleEventAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleEventSub = () => {
        if (quantity > 0) {
            setQuantity(quantity -1 )
        }
    }
    const handleEventClickLike = () => {
        like ? setLike(false) : setLike(true)
        like ? setQuantityLike(quantityLike + 1) : setQuantityLike(quantityLike -1)
    }
    return (
        <div className='grid__row info-product'>
            <div className='details'>
                <div className='details-product'>
                    <img className='details-product-img' src='https://tse4.mm.bing.net/th?id=OIP.gpnRPmJ-LdgDGuXqpXYzrAHaHa&pid=Api&P=0&h=180' alt=''></img>
                    <div className='details-product-action'>
                        <span>Chia sẻ</span>
                        <div className='favourit'>
                            <i className='fa-regular fa-heart fa-heart-icon {like && icon-color}' onClick={handleEventClickLike}></i>
                            <div className='favourit-text'>Yêu thích</div>
                            <span className='fouvourit-quantity'>{quantityLike}</span>
                        </div>
                    </div>
                </div>

                <div className='details-info'>
                    <div className='details-info-title'>[Tuyển sỉ] [Túi 26 viên] LƯƠNG KHÔ HẠT SÔ-CÔ-LA TỰ NHIÊN FUCUCO 400gram</div>
                    <div className='details-info-view'>
                        <div className='details-info-view-star'>
                            <span className='quantity-star'>4.9</span>
                            <div className='star-icon'>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                            </div>
                        </div>

                        <div className='details-info-evaluate'>
                            <span className='quantity-evaluate'>150</span>
                            <span>Đánh giá</span>
                        </div>

                        <div className='details-info-sold'>
                            <span className='quantity-sold'>1.1k</span>
                            <span>Đã bán</span>
                        </div>
                    </div>
                    <div className='details-info-price'>
                        <span className='details-info-price-old'>2.000.000$</span>
                        <span className='details-info-price-current'>1.000.000$</span>
                    </div>

                    <div className='details-info-size'>
                        <span className='details-info-size-title'>Kích thước</span>
                        <button className='choose-size'>41</button>
                    </div>

                    <div className='details-info-quantity-product'>
                        <span className='details-info-quantity-product-title'>Số lượng</span>
                        <div className='bt-quantity'>
                            <button type='button' className='bt-quantity-subtract' onClick={handleEventSub}>-</button>
                            <span className='bt-quantity-number'>{quantity}</span>
                            <button type='button' className='bt-quantity-add' onClick={handleEventAdd}>+</button>
                        </div>
                    </div>

                    <div className='action'>
                        <button className='action-add-cart'>
                          <i className="fa-solid fa-cart-shopping"></i>
                          <span className='action-add-cart-text'>Thêm sản phẩm vào giỏ hàng</span>
                        </button>
                        <button className='action-buy-product'>
                            Mua sản phẩm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Displayproduct


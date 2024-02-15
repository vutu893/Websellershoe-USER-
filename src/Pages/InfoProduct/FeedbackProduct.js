import './InfoProduct_main.css'

function FeedbackProduct() {
    return (
        <div className='feedback_product'>
            <span className='feedback_product-title'>Đánh giá sản phẩm</span>
            <div className='grid__row feedback_product-comment'>
                <div className='comment-container'>
                    <label className='comment-container-title'>Comment</label>
                    <textarea className='comment-container-input'></textarea>
                </div>
           </div>
           <button className='feedback_product-btn'>Send</button>
        </div>    
    )
}

export default FeedbackProduct
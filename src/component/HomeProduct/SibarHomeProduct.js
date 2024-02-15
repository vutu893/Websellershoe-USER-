import './HomeProduct.css'

function SibarHomeProduct() {
    return (
            <div className='grid__column-2 sibar-home-product'>
                <nav className="category">
                    <h3 className="category__heading">
                        <i className="fa-solid fa-bars category__heading-icon"></i>
                        Danh mục
                    </h3>
        
                    <ul className="category-list">
                        <li className="category-item category-item--active">
                            <span className="category-item-link ">Thương hiệu Adidas</span>
                        </li>
        
                        <li className="category-item">
                            <span href="/" className="category-item-link ">Thương hiệu Nike</span>
                        </li>
        
                        <li className="category-item">
                            <span href="/" className="category-item-link ">Thương hiệu Jordan</span>
                        </li>

                        <li className="category-item">
                            <span href="/" className="category-item-link ">Thương hiệu Guci</span>
                        </li>                               
                    </ul>
                </nav>
            </div>
    )
}

export default SibarHomeProduct
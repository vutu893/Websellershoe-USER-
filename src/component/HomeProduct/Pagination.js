import './HomeProduct.css'

function Pagination() {
    return (
            <ul className="pagination home-product__pagination">
                <li className="pagination-item">
                    <i className="fa-solid fa-angle-left pagination-item__icon"></i>
                </li>

                 <li className="pagination-item pagination-item__active">
                    <a href="/" className="pagination-item__link">1</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">2</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">3</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">4</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">5</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">...</a>
                </li>

                <li className="pagination-item">
                    <a href="/" className="pagination-item__link">14</a>
                </li>
                            
                <li className="pagination-item">
                    <i className="fa-solid fa-angle-right pagination-item__icon"></i>
                </li>
            </ul>
    )
}

export default Pagination
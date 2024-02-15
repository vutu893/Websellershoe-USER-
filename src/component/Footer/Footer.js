import './Footer.css'

function Footer(progs) {
    return (
        <div>
            <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid-column-2-4">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">H3T-shop-mall</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid-column-2-4">
                        <h3 className="footer__heading">Gioi thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Giới Thiệu Về H3T Shop</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Điều Khoản</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Chương Trình Tiếp Thị Liên Kết</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid-column-2-4">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">H3T-shop-mall</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid-column-2-4">
                        <h3 className="footer__heading">Theo dõi chúng tôi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                   
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                   
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                    
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
import { useState } from 'react'
import { registerUser } from '../../services/userService'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import './main.css'

function Register() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const hanleRegisterUser = async() => {
        const res = await registerUser(fullName,email,password)
        console.log('>>>> check res: ',res)
        if(res && res.token) {
            toast.success('Đăng ký thành công')
            setFullName('')
            setEmail('')
            setPassword('')
            navigate('/login')
        } else {
            if( res && res.status === 401){
                toast.error('Bạn chưa điền hết thông tin')
                setFullName('')
                setEmail('')
                setPassword('')
            }
        }
    }

    return (
        <div className="main">
            <form className="form">
                <h3 className="heading">Đăng ký tài khoản cá nhân</h3>
            
                <div className="spacer"></div>
            
                <div className="form-group">
                    <label  className="form-label">Tên đầy đủ</label>
                    <input  type="text"
                            placeholder="VD: Nguyễn Văn A"
                            className="form-control"
                            value={fullName}
                            onChange={(event) => {setFullName(event.target.value)}}
                    ></input>
                </div>
            
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input  type="text"
                            placeholder="VD: email@domain.com"
                            className="form-control"
                            value={email}
                            onChange={(event) => {setEmail(event.target.value)}}
                    ></input>
                    
                </div>
            
                <div className="form-group">
                    <label  className="form-label">Mật khẩu</label>
                    <input  type="password"
                            placeholder="Nhập mật khẩu"
                            className="form-control"
                            value={password}
                            onChange= {(event) => {setPassword(event.target.value)}}
                    ></input>
                    
                </div>
            
            
                <button type="button" className="form-submit"
                        onClick={() => {hanleRegisterUser()}}
                >Đăng ký
                </button>
            </form>
        </div>
    )
}
export default Register
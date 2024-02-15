import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { loginUser } from '../../services/userService'
import './main.css'
import { UserContext } from '../../Context/userContext'
import { useContext } from 'react'

function Login() {
    const {loginContext} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleLoginUser = async() => {
        const res = await loginUser(email, password)

        if(res && res.token && res.fullname) {
            console.log(res)
            loginContext(email,res.token,res.fullname)
            toast.success('Đăng nhập thành công')
            navigate('/')
        }else {
            if(res && res.status === 401) {
                toast.error('Email hoặc password không đúng')
                setEmail('')
                setPassword('')
            }
            if(res && res.status === 400) {
                toast.error('Bạn cần nhập email/password')
                setEmail('')
                setPassword('')
            }
        }
    }
    return (
        <div className="main">
            <form  className="form" >
                <h3 className="heading">Đăng nhập</h3>
            
                <div className="spacer"></div>
            
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input  type="text" 
                            placeholder="VD: email@domain.com" 
                            className="form-control"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                    ></input>
                    
                </div>
            
                <div className="form-group">
                    <label  className="form-label">Mật khẩu</label>
                    <input  type="password" 
                            placeholder="Nhập mật khẩu" 
                            className="form-control"
                            value={password}
                            onChange={(event) => {setPassword(event.target.value)}}
                    ></input>
                </div>
            
                <button type='button' 
                        onClick={() => {handleLoginUser()}}
                        className="form-submit"               
                >Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login
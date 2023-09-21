import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router"
import { useLogoutMutation } from "../features/usersApiSlice"
import { clearCredentials } from "../features/authSlice"
const Home = ()=>{
    const redirect = ()=>{
        nav('/profile')
    }
    const signout =async()=>{
        const res = await logout().unwrap()
        console.log(res)
        dispatch(clearCredentials())
        nav('/auth')
    }
    const {userInfo} = useSelector((state)=>state.auth)
    const [logout] = useLogoutMutation();
    const nav = useNavigate()
    const dispatch = useDispatch();
    return(
        <div>
            <div>{userInfo.name}</div>
            <button onClick={redirect}>Profile</button>
            <button onClick={signout}>Logout</button>
        </div>

    )
}
export default Home
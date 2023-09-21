import { Navigate,Outlet } from "react-router-dom";
import { useIsauthMutation} from "../features/usersApiSlice";
import { useDispatch, useSelector} from "react-redux";
import { clearCredentials, setCredentials } from "../features/authSlice";
import { useEffect,useState } from "react";
const PrivateRoute =  () =>{
    const [isauth] = useIsauthMutation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const {userInfo} = useSelector((state)=>state.auth)
    useEffect(()=>{
        const checkauth = async ()=>{
            try{
                const res = await isauth().unwrap()
                dispatch(setCredentials({...res}))
            }catch(e){
                dispatch(clearCredentials())
            }
            finally{
                setIsLoading(false)
            }
        }
        if (!userInfo){
            checkauth()
        }
        else{
            setIsLoading(false)
        }
    },[isauth,dispatch,userInfo])
        
    if (isLoading){
        return <div>Wait bruh</div>
    }
    else if(userInfo){
        return <Outlet/>
    }
    else{ return <Navigate to='/auth' replace='/'/>}
}
export default PrivateRoute

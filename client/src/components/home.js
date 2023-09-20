import { useSelector} from "react-redux"
const Home = ()=>{
    const {userInfo} = useSelector((state)=>state.auth)
    return(
        <div>
            {userInfo.name}
        </div>
    )
}
export default Home
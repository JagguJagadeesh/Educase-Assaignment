import Home from "./components/Home"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Account from "./components/Account.jsx"
import Loader from "./components/Loader.jsx"
import { useStore } from './utils/store.js'
import { useEffect,useState } from "react"

function App() {

  const slide = useStore((state)=>state.slide)
  const [loading, setLoading] = useState(false);

  let renderSlide = () => {
    if(slide==='login'){
      return (<Login/>)
    }else if(slide==='register'){
      return (<Signup/>)
    }else if(slide==='account'){
      return (<Account/>)
    }else{
      return (<Home />)
    }
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay before rendering component
    return () => clearTimeout(timer);
  }, [slide]);


  return (
    <div className="sm:h-screen sm:flex items-center justify-center">
      <div className="w-[410px] h-[915px] sm:w-[300px] sm:h-[540px] rounded-lg border border-gray-400 shadow-lg shadow-black">
       {loading ? <Loader /> : renderSlide()}
      </div>
    </div>
  )
}

export default App

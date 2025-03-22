import Button from "./Button"
import { useStore } from '../utils/store.js'


function Home() {
    const setSlide = useStore((state)=>state.updateSlide)


  return (
    <div className="h-full py-6 px-4 flex flex-col-reverse gap-2">
        <Button onClick={()=>setSlide("login")} text="Already Registered? Login" color="bg-violet-400" className="text-black" />
        <Button onClick={()=>setSlide("register")} text="Create Account" className="text-white"/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h1 className="text-2xl font-bold font-sans">Welcome to PopX</h1>
    </div>
  )
}

export default Home
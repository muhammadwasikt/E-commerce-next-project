import { useSelector } from "react-redux"
import Home from "../(pages)/home/page"



interface Array {
  allProducts: any[]
}
const MainPage = () => {
  const data = useSelector((item : Array)=>item?.allProducts)
  return (
    <div>
      <Home /> 
    </div>
  )
}

export default MainPage

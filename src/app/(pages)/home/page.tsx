'use client'
import BrandName from "@/app/components/common/BrandName"
import Hero from "@/app/components/common/Hero"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import { useSelector } from "react-redux"

interface Array{
  allProducts: []
}

const Home = () => {
  const data = useSelector((state:Array)=>state?.allProducts)

  console.log(data);
  return (
    <div>
      <Header />
      <Hero />
      <BrandName />
      <Footer />
    </div>
  )
}

export default Home

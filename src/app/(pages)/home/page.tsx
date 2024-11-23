'use client'
import BrandName from "@/app/components/common/BrandName"
import Hero from "@/app/components/common/Hero"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import { useSelector } from "react-redux"
import SetProducts from "@/app/components/common/SetProducts"

interface Array {
  allProducts: []
}
const Home = () => {

  const data = useSelector((state: Array) => state?.allProducts)

  console.log(data);
  return (
    <div>
      <SetProducts />
      <Header />
      <Hero />
      <BrandName />
      <Footer />
    </div>
  )
}

export default Home


'use client'
import BrandName from "@/app/components/common/BrandName"
import Hero from "@/app/components/common/Hero"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import SetProducts from "@/app/components/common/SetProducts"
import NewArrivals from "../../components/common/NewArrivals"
import TopSellingProducts from "@/app/components/common/TopSellingProducts"
import OverHappyCustomers from "@/app/components/common/OverHappyCustomers.jsx"


const Home = () => {
  return (
    <div>
      <SetProducts />
      <Header />
      <Hero />
      <BrandName />
      <NewArrivals />
      <TopSellingProducts />
      <OverHappyCustomers />
      <Footer />
    </div>
  )
}

export default Home


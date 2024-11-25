import BrandName from "../../components/common/BrandName.jsx"
import Hero from "../../components/common/Hero.jsx"
import Footer from "../../components/Footer.jsx"
import SetProducts from "../../components/common/SetProducts.jsx"
import NewArrivals from "../../components/common/NewArrivals.jsx"
import TopSellingProducts from "../../components/common/TopSellingProducts.jsx"
import OverHappyCustomers from "../../components/common/OverHappyCustomers.jsx"


const Home = () => {
  return (
    <div>
      <SetProducts />
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


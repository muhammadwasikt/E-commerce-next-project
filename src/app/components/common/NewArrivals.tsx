"use client"
import Card from "@/app/components/common/Card"
import { useState } from "react"
import { useSelector } from "react-redux"



interface Array {
    allProducts: any[]
}
interface Obj {
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
    rating: string,
    greate: string,
    name: string,
}
const NewArrivals = () => {
    
    const [veiwAll , setVeiwAll] = useState(false)
    const data = useSelector((state: Array) => state?.allProducts)
const handleVeiwAll = ()=>{
    setVeiwAll(!veiwAll)
}
    return (
        <div className="py-10 text-center">
            <h1 className="text-3xl font-bold mb-7 tracking-tighte">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3">
            {
                data?.slice(0,4).map((data: Obj)=> <Card item={data} key={data.id} badge={true}/>)
            }
            {
                veiwAll ? data?.slice(5,20).map((data: Obj)=> <Card item={data} key={data.id} badge={true}/>) : null
            }
        </div>
        <div className="text-center pt-6">
            <button className='py-1 px-3 border hover:bg-secondary rounded font-bold text-lg' onClick={handleVeiwAll}>View {!veiwAll ? 'All' : 'Less'}</button>
        </div>
        </div>
    )
}

export default NewArrivals

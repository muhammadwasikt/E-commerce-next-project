"use client"

import axios from "axios"
import { useDispatch } from "react-redux"
import { dispatchActions } from "../../store/actions/actions"
import { useEffect } from "react"


const SetProducts = () => {

    const dispatch = useDispatch()

    const handleSetProducts = async () => {
        const allProducts = await axios('https://fakestoreapi.com/products')
        dispatch(dispatchActions(allProducts?.data))

    }

    useEffect(() => {
            handleSetProducts()
    },[])

}
export default SetProducts;


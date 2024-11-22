'use cleint'

import axios from "axios"
import { useDispatch } from "react-redux"
import { dispatchActions } from "./actions"
import { useEffect } from "react"


export const SetProducts = () => {
    const dispatch = useDispatch()

    const handleSetProducts = async () => {
        const allProducts = await axios('https://fakestoreapi.com/products')
        dispatch(dispatchActions(allProducts?.data))
    }

    useEffect(()=>{
        handleSetProducts()
    },[])
}



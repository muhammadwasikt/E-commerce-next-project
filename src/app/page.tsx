"use client"
import MainPage from "./modules/MainPage"
import {Provider} from 'react-redux'
import {store} from './store/store'

const page = () => {
  return (
    <div>
      <Provider store={store}>
      <MainPage />
      </Provider>
    </div>
  )
}

export default page


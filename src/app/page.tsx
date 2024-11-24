"use client"
import MainPage from "./modules/MainPage"
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from "redux-persist/integration/react"

const page = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainPage />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default page


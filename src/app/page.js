'use client'
import { Provider } from "react-redux";
import MainPage from "./modules/MainPage";
import { store , persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  )
}

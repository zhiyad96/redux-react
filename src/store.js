import {configureStore} from "@reduxjs/toolkit"
import { middleware } from "./middleware"
import {counterreducer} from"./couterreducer"
export const store= configureStore({
  reducer:{counter:counterreducer},
  middleware:(getmiddleware)=>getmiddleware().concat(middleware)

})
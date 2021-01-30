import { createStore } from "redux";
import allReducer from "./reducer";


const store = createStore(allReducer)

// eslint-disable-next-line
export default {store};
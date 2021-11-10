import { createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootreducer from "./Reducer/Rootreducer";




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store= createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)))

export default store
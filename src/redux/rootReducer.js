import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {loaderReducer} from "./loaderReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    loader:loaderReducer,
    app:appReducer
})
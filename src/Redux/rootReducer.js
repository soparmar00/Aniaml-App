import { combineReducers } from "redux";
import { animal } from "./reducer";
export const rootReducer = combineReducers({
    animal: animal
});

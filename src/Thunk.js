import axios from "axios"
import { filterAnimal, showData } from "./Redux/action";

const request = axios.create({
    baseURL: "http://shibe.online/api",
})

export const fetchData = () => async (dispatch) => {
    try {
        const response = await request.get(`shibes?count=10`)
        dispatch(showData(response.data));
        console.log(response.data)
    }
    catch (err) {
        console.log(err);
    }

}

export const filterData = (state) => async (dispatch) => {
    try {
        const { record, category } = state
        const response = await request.get(`${category}?count=${record}`)
        console.log(response.data)
        dispatch(filterAnimal({ fetchData: response.data }))
    }
    catch (err) {
        console.log(err);
    }
}
import { FILTER_ANIML, SHOW_DATA, } from "./action"

const intialState = {
    fetchData: [],

};

export const animal = (state = intialState, action) => {
    switch (action.type) {

        case SHOW_DATA:
            return {
                ...state,
                fetchData: action.payload
            };

        case FILTER_ANIML:
            return {
                ...state,
                fetchData: action.payload.fetchData
            }

        
        default:
            return state;
    }
};





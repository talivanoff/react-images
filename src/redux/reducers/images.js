import {
    IMAGES_LOAD_ERROR,
    IMAGES_LOAD_START,
    IMAGES_LOAD_SUCCESS,
    INPUT_CHANGE_ERROR,
    INPUT_CHANGE_SUCCESS
} from "../constants/actionTypes";

const initialState = {
    inputValue: '',
    data: [],
    loading: false,
    inputError: false,
    error: null
};

export default function imageReducer(state = initialState, action) {
    switch (action.type) {
        case IMAGES_LOAD_START:
            return {
                ...state, loading: true
            };
        case IMAGES_LOAD_SUCCESS:
            return {
              ...state, loading: false, data: action.images
            };
        case IMAGES_LOAD_ERROR:
            return {
                ...state, loading: false, error: action.error
            };
        case INPUT_CHANGE_SUCCESS:
            return {
                ...state, inputError: false, inputValue: action.value
            };
        case INPUT_CHANGE_ERROR:
            return {
                ...state, loading: false, inputError: true, inputValue: action.value
            };
        default:
            return state
    }
}
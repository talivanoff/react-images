import {
    IMAGES_LOAD_ERROR,
    IMAGES_LOAD_START,
    IMAGES_LOAD_SUCCESS,
    INPUT_CHANGE_ERROR,
    INPUT_CHANGE_SUCCESS
} from "../constants/actionTypes";

export function loadImagesStart() {
    return {
        type: IMAGES_LOAD_START
    }
}

export function loadImagesSuccess(images) {
    return {
        type: IMAGES_LOAD_SUCCESS,
        images
    }
}

export function loadImagesError(error) {
    return {
        type: IMAGES_LOAD_ERROR,
        error
    }
}

export function changeValueSuccess(value) {
    return {
        type: INPUT_CHANGE_SUCCESS,
        value
    }
}

export function changeValueError(value) {
    return {
        type: INPUT_CHANGE_ERROR,
        value
    }
}

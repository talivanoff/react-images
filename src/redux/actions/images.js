import {loadImagesStart, loadImagesSuccess, loadImagesError, changeValueError } from "../actions/actionCreators";
import ImageService from "../../services/image-service";

export function loadImages(count = 10) {
    return  async dispatch => {
        let isNumber = count && !isNaN(count) && count > 0;

        if (isNumber) {
            dispatch(loadImagesStart());

            try {
                const imageService = new ImageService();
                const images = await imageService.getResource(count);

                dispatch(loadImagesSuccess(images));
            } catch (e) {
                dispatch(loadImagesError(e));
            }
        } else {
            dispatch(changeValueError(count));
        }
    }
}
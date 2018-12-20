import {changeValueSuccess, changeValueError } from "../actions/actionCreators";

export function changeInputValue(count) {
    return dispatch => {
        let isNumber = count && !isNaN(count) && count > 0;

        if (isNumber) {
            dispatch(changeValueSuccess(count));
        } else {
            dispatch(changeValueError(count));
        }
    }
}
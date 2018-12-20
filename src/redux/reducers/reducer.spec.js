import imageReducer, {initialState} from './images'
import * as actionTypes from '../constants/actionTypes'

//example of tests

describe('reducer', () => {
    it('IMAGES_LOAD_START', () => {
        const action = {
            type: actionTypes.IMAGES_LOAD_START
        };

        expect(imageReducer(initialState, action)).toEqual({
            ...initialState,
            data: [],
            loading: true,
        })
    });

    it('IMAGES_LOAD_SUCCESS', () => {
        const stateBefore = {
            inputValue: 3,
            data: [],
            loading: true,
            inputError: false,
            error: null
        };

        const action = {
            type: actionTypes.IMAGES_LOAD_SUCCESS,
            images: [1,2,3]
        };

        expect(imageReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            data: action.images,
            loading: false,
        })
    })
});

//...
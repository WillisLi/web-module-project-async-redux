import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/waifuActions";

const initialState = {
    url: '',
    isFetching: false,
    error: '',
}

export const waifuReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            isFetching: true,
            error: ''
          });
        case(FETCH_SUCCESS):
          return({
            ...state,
            url: action.payload.url,
            isFetching: false
          });
        case(FETCH_FAIL):
          return({
            ...state,
            error: action.payload,
            isFetching: false
          })
        default:
          return state;
    }
}
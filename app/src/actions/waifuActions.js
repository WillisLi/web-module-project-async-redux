import axios from 'axios';

export const getWaifu = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://api.waifu.pics/sfw/waifu')
            .then(response => {
                console.log(response)
                dispatch(fetchSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    }
}

export const FETCH_START = "FETCH_START";
export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (url)=> {
    return({type: FETCH_SUCCESS, payload: url});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}

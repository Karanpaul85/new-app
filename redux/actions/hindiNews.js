import * as types from '../type';

export const fetchHindiNews = (data) => async dispatch =>{
    //console.log(data);
    dispatch({
        type: types.HINDI_NEWS,
        payload: data
    });
}
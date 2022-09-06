import * as types from '../type';
const initialState = {
    hindi:{},
    eng:{}
}
const NewsData = (state = initialState , action) => {
    switch(action.type){
        case types.HINDI_NEWS:
            return {
                ...state,
                hindi:'action.payload'
            };
            break;
        case types.ENG_NEWS:
            return {
                ...state,
                eng:action.payload
            };
            break;
        default:
           return state
    }
}
export default NewsData;
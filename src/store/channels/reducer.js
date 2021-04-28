import {
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL,
    INTIGRATE_NEW_CHANNEL_SUCCESS,
    INTIGRATE_NEW_CHANNEL_FAIL,

} from './actionTypes'
const INIT_STATE = {
  channels: [],
    error: {},
}
const channelsr = (state=INIT_STATE,action)=>{
  console.log(action.payload)
    switch(action.type){
    case GET_CHANNELS_SUCCESS:
      return {

        ...state,
        channels: action.payload,
      }

    case GET_CHANNELS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
    }
}
export default channelsr
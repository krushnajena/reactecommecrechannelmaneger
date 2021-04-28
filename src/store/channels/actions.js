import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL,
} from './actionTypes'
export const getChannels=()=>({
    type:GET_CHANNELS
})


export const getChannelSuccess = chennels => ({
  type: GET_CHANNELS_SUCCESS,
  payload: chennels,
})

export const getChennelFail = error => ({
    type: GET_CHANNELS_FAIL,
    payload: error,
})
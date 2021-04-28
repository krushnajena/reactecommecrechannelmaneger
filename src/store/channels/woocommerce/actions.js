import { channel } from '@redux-saga/core'
import {
    POST_INTIGRATE_WOOCOMMERCE_CHANNEL,
    POST_INTIGRATE_WOOCOMMERCE_CHANNEL_SUCCESS,
    POST_INTIGRATE_WOOCOMMERCE_CHANNEL_FAIL,
} from './actionTypes'

export const post_intigrate_woocommerce_channel = (channel, history) => {
    return {
      type: POST_INTIGRATE_WOOCOMMERCE_CHANNEL,
      payload: { channel, history },
    }
}

export const post_intigrate_woocommerce_channel_success = channel => {
    return {
      type: POST_INTIGRATE_WOOCOMMERCE_CHANNEL_SUCCESS,
      payload: channel,
    }
}

export const post_intigrate_woocommerce_channel_failed = error => {
    return {
      type: POST_INTIGRATE_WOOCOMMERCE_CHANNEL_FAIL,
      payload: error,
    }
  }
  
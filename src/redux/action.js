import { SET_DATA_PAYMENT, SET_DATA_PRODUCTS, SET_DISPLAY_ALERT, SET_ITEM_PROP_ALERT, SET_LOADING } from "./constants";

export const setDisplayAlert = (payload) => ({
  type: SET_DISPLAY_ALERT,
  payload: payload,
});
export const setItemPropAlert = (payload) => ({
  type: SET_ITEM_PROP_ALERT,
  payload: payload,
});


export const setDataProducts = (payload) => ({
  type: SET_DATA_PRODUCTS,
  payload: payload,
});
export const setLoadingGlobal = (payload) => ({
  type: SET_LOADING,
  payload: payload,
});
export const setDataPayment = (payload) => ({
  type: SET_DATA_PAYMENT,
  payload: payload,
});

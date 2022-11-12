import { SET_DATA_PRODUCTS, SET_DISPLAY_ALERT, SET_ITEM_PROP_ALERT, SET_LOADING } from "./constants";

const initialState = {
  alert: {
    displayAlert: false,
    itemPropAlert: <></>,
  },

  products: {
    values: [],
  },
  isLoadingGlobal: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          displayAlert: action.payload,
        },
      };
    case SET_ITEM_PROP_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          itemPropAlert: action.payload,
        },
      };

    case SET_LOADING:
      return {
        ...state,
        isLoadingGlobal: action.payload,
      };

      case SET_DATA_PRODUCTS:
        return {
          ...state,
          products: {
            values: action.payload
          },
        };

    default:
      return state;
  }
};
export default rootReducer;
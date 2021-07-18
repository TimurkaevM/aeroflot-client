export const LOAD_START = 'images/load/start';
export const LOAD_SUCCESS = 'images/load/success';
export const LOAD_FAILED = 'images/load/success';
export const FETCHED_IMAGES = 'images/load/fetch';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: false,
      };

    case LOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

export const loadImage = () => {
  return { type: LOAD_START };
};

export const loadImageSuccess = (data) => {
  return { type: LOAD_SUCCESS, payload: data };
};

export const loadImageFailed = () => {
  return { type: LOAD_FAILED };
};

export const fetchImages = () => {
  return { type: FETCHED_IMAGES };
};

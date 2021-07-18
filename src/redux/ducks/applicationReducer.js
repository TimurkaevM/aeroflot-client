const ADD_FAVORITE = 'favorite/added';
const DELETE_FAVORITE = 'favorite/deleted';

const initialState = {
  favorites: [],
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite._id !== action.payload,
        ),
      };

    default:
      return state;
  }
}

export const AddingFavorite = (ticket) => {
  return {
    type: ADD_FAVORITE,
    payload: ticket,
  };
};

export const DeletingFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const LOAD_START = 'tickets/load/start';
export const LOAD_SUCCESS = 'tickets/load/success';
export const LOAD_FAILED = 'tickets/load/success';
export const FETCHED_TICKETS = 'tickets/load/fetch';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export default function ticketsReducer(state = initialState, action) {
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

export const loadTicketsStart = () => {
  return { type: LOAD_START };
};

export const loadTicketsSuccess = (data) => {
  return { type: LOAD_SUCCESS, payload: data };
};

export const loadTicketsFailed = () => {
  return { type: LOAD_FAILED };
};

export const fetchTickets = () => {
  return { type: FETCHED_TICKETS };
};

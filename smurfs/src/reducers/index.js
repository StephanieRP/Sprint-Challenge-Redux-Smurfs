import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAIL
} from "../actions/index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Get Data reducers
    case FETCH_DATA_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: "Something went wrong",
        fetchingSmurfs: false
      };

    //Add Smurf reducers:
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: "Something went wrong"
      };
    //delete smurf
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: "Something went wrong"
      };
    //edit smurf
    case EDIT_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        error: null
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case EDIT_SMURF_FAIL:
      return {
        ...state,
        updatingSmurf: false,
        error: "Something went wrong"
      };

    default:
      return state;
  }
};

export default reducer;

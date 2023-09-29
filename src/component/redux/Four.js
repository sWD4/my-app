const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//initial state
const initialState = {
    loading: false,
    users: [],
    error: "",
};

const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

//action
const userRequest = () => {
    return {
        type: USER_REQUEST,
    };
};

const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users,
    };
};

const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error,
    };
};

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_REQUEST":
            return {
                ...state,
                loading: true,
            };

        case "USER_SUCCESS":
            return {
                loading: false,
                users: action.payload,
                error: "",
            };

        case "USER_ERROR":
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const fetchuser = () => {
    return function (dispatch) {
        dispatch(userRequest)
        axios.get("https://jsonplaceholder.typicode.com/users", {
            headers: { "Accept-Encoding": "gzip,deflate,compress" },
        })

            .then((response) => {
                // response.data
                const users = response.data.map((user) => user.name);
                dispatch(userSuccess(users));
            })
            .catch((error) => {
                // error.message
                dispatch(userError(error.message));
            });
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchuser)
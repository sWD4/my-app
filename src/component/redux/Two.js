//Multiple Actions | Multiple Action Creators
const { createStore } = require("redux");

const initialState = {
  numberOfBooks: 100,
  numberOfPens: 50,
};

//action creators
function BuyBook() {
  return {
    //action  pass karate hai to 2 chiz hoti hai type or payload
    type: "Buy_Book",
    payload: "My first redux",
  };
}
function BuyPen() {
  return {
    //action  pass karate hai to 2 chiz hoti hai type or payload
    type: "Buy_Pen",
    payload: "My first redux",
  };
}

//reducer previous State,action

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
         ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    case "Buy_Pen":
      return {
         ...state,
        numberOfPens: state.numberOfPens - 2,
      };
    default:
      return state;
  }
};

//create store

const Store = createStore(Reducer);
//console.log(Store)
console.log("initial State", Store.getState());

Store.subscribe(() => {
  console.log("update state value", Store.getState());
});

Store.dispatch(BuyBook());  //sync  hai 
Store.dispatch(BuyPen());
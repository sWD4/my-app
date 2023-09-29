const { redux, createStore } = require('redux')

const initialState = {
  numberOfBooks: 100,
  numberOfLaptops: 50,
}
//action
function buyBook() {
  return {
    type: 'buy_book',
    info: 'my_first_redux'
  }
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'buy_book':
      return {
        a: state.numberOfBooks - 1
      }
    default:
      return state
  }
}
//store
const Store = createStore(reducer)
// console.log(Store) 
console.log('intial State', Store.getState())
Store.subscribe(()=>{
  console.log('update state', Store.getState())
})

Store.dispatch(buyBook())
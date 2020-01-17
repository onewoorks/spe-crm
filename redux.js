const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
}

// 2. reducer -- laluan untuk update value dalam store
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_AGE'){
        return {
            ...state,
            age: state.age + 1
        }
    }

    if (action.type === 'CHANGE_VALUE'){
        return {
            ...state,
            value: state.value + action.value
        }
    }
    return state;
}

// 1. store -- tempat simpan value
const store = createStore(rootReducer)
console.log(store.getState())

// 4. Subscription -- process panggil store
store.subscribe(()=>{
    console.log('store change = ', store.getState())
})

// 3. dispatch(action) -- process panggil reducer
store.dispatch({
    type: 'ADD_AGE',
    age: 1
})
store.dispatch({
    type: 'CHANGE_VALUE',
    value: 20
})
console.log(store.getState())


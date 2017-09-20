import C from './constants'

import { error } from './stores/stores.js'

import { allSkiDays, goal} from './initialState.json'
// import { createStore } from 'redux'

const  state = 15
const action = {
    type: C.ADD_DAY,
    days: 10
}

const stateError = [
    "Server Data not Found", "Unknown Error Accured", "404 Page not Found"
]



function goal1(state = 10, action){
    if(action.type === C.ADD_DAY){
        return console.log(C.SET_GOAL)
    }
    else {
        return console.log(state)
    }
}

goal1(state, action)

error(stateError, "Action")
// console.log(`
//     Ski Days Counter
//     ================
//     The Goal is ${goal} days
//     Initially There are ${allSkiDays.length} ski days in state

defaultImpor

//     constant (Actions)
//     ==================
//     ${Object.keys(C).join('\n       ')}


// `)
//         function changeNumber(state= 0, action){
//             if(action.type == "increament"){
//                 return state += 1
//             }
//             else if(action.type == "descriment"){
//                 return state -+ 1
//             }
//         }

//         var store = createStore(changeNumber)

//         store.subscribe(()=> {
//             console.log(store.getState())
//         })

//         stroe.dispatch({type: "increament"})


// alert("Hello World")
import React, { useReducer } from 'react';

const myContext = React.createContext();

//更改我的线索类型
function reducer(state, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case 'myClueType':
            newState = {myClueType: action.myClueType};
            return newState;
        default:
            return state;
    }
}

const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, {myClueType: 0});
    return <myContext.Provider value = {{state, dispatch}}>
        {props.children}
    </myContext.Provider>
}

export { reducer, myContext, ContextProvider}
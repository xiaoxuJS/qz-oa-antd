import React, { useReducer } from 'react';

const myContext = React.createContext();

const stateAll = {
    myClueType: 0, //我的线索类型
    itemStatus: 0, //项目状态
    itemType: 1, //项目类型
}

//更改我的线索类型
function reducer(state = stateAll, action) {
    console.log(state)
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case 'myClueType':
            newState.myClueType = action.myClueType;
            return newState;
        case 'itemMonagement':
            newState.itemStatus = action.itemStatus;
            newState.itemType = action.itemType;
            return newState;
        default:
            return state;
    }
}

const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, stateAll);
    return <myContext.Provider value = {{state, dispatch}}>
        {props.children}
    </myContext.Provider>
}

export { reducer, myContext, ContextProvider}
import React, { useReducer } from 'react';

const myContext = React.createContext();

const stateAll = {
    myClueType: 1, //我的线索类型
    itemStatus: 0, //项目状态
    itemType: 1, //项目类型
    clientType: 0, //客户类型
    cluesType: 1, //线索池类型0:已分配,1:未分配,2:已搁置
}

//更改我的线索类型
function reducer(state = stateAll, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case 'myClueType':
            newState.myClueType = action.myClueType;
            return newState;
        case 'itemMonagement':
            newState.itemStatus = action.itemStatus;
            newState.itemType = action.itemType;
            return newState;
        case 'client':
            newState.clientType = action.clientType;
            return newState;
        case 'cluesAll': //线索池
            newState.cluesType = action.cluesType;
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
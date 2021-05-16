export const initialState={
    userInfo:null,
}

export const action_types={
    SET_USER:'SET_USER',
    LOGOUT:'LOGOUT_USER'
}

export const reducer=(state,action)=>{
    
    switch(action.type){
        case action_types.SET_USER:
            return {...state, userInfo:action.user}
        default :
        return state
           
    }

}
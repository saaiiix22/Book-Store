const initialState = {
    books:[]
}

const bookReducer =(state=initialState,action)=>{
    if(action.type == "SET_BOOKS" ){
        return {...state,books:action.payload}
    }
}

// const creds ={
//     username:"",
//     email:"",
//     password:""
// }
// export const createAccReducer = (state= creds,action)=>{
//     if(action.type == "create"){
//         return {...state,username:action.payload.username,email:action.payload.email,password:action.payload.password}
//     }
// }

export default bookReducer
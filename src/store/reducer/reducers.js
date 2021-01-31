
const initialState = {
  auth:false,
  errorMessage:''
}

// eslint-disable-next-line
export default (state=initialState,action={})=>{
  switch(action.type){
    case 'LOG_IN':{
      if(action.form.email === 'Admin' && action.form.password === '12345'){
      return {auth:true}
      }
      return {...state, errorMessage:'The email or password you’ve entered doesn’t match any account.'}
    }
    default:return state
  }
}
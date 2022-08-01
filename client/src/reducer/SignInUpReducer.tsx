type Action<T>={ type:string; payload:T; }

export function SignInUpReducer( state:any, action: Action<string>)
{
    switch(action.type){
        case 'EMAIL':{
            let email = false;
            if( action.payload.includes('@') && action.payload.length > 5 )
                email = true;
            let values = { ...state.values, email }, isFormValid = (state.values.password && state.values.repeatedPassword && email );
            return {...state,values,isFormValid };
        }
        case 'PASSWORD':{
            let password = false;
            if( action.payload.length > 4 )
                password = true;
            let values = {...state.values,password}, isFormValid = (state.values.email && state.values.repeatedPassword && password );
            return {...state,values,isFormValid };
        }
        case 'REPEATED_PASSWORD':{
            let repeatedPassword = false;
            if( action.payload.length > 4 )
                repeatedPassword = true;
            let values = {...state.values,repeatedPassword}, isFormValid = (state.values.email && state.values.password && repeatedPassword );
            return {...state,values,isFormValid };
        }
    }
    return state;
}
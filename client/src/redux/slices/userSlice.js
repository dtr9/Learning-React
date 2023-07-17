import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userSlice',
    initialState:{
        userName:'',
        userEmail:'',
    },
    reducers:{
        setUserName: (state,action)=>{
            state.userName=action.payload;
        },
        setUserEmail: (state,action)=>{
            state.userEmail=action.payload;
        },
    },
});

export const {setUserName,setUserEmail} = userSlice.actions;
export default userSlice.reducer;
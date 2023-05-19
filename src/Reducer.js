import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name:"users",
    initialState: {
        users:[]
    },
    reducers:{
        addUser : (state,action) => {
              state.users.push(action.payload);
        },
        updateUser : (state,action) => {
             const user = state.users.find(user => user.id == action.payload.id);
             if(user){
                for(const details in user){
                   user[details] = action.payload[details];
                }
             }
        },
        deleteUser: (state,action) => {
            const user = state.users.find(user => user.id == action.payload.id);
            if(user){
                let filteredArray = state.users.filter(users => users.id !== action.payload.id);
                state.users = filteredArray;
            }
        }
    }
})
export const { addUser,updateUser,deleteUser } = usersSlice.actions
export default usersSlice.reducer;
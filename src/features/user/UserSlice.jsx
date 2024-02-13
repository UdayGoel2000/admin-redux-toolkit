import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = { id: nanoid(), name: action.payload };
      state.push(user);
    },
    removeUser: (state, action) => {
      return [...state].filter((user) => user.id != action.payload);
      // state.splice(0, 1);
    },
    clearAllUsers: () => {
      return [];
    },
  },
});
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
export default userSlice.reducer;

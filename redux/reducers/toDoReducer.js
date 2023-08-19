import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  status: "usual",
};
// export const getItemsAsynk = createAsyncThunk("items/fetchItem", async () => {
//   const response = await fetch("http://localhost:4000/tasks");
//   const items = await response.json();
//   return items;
// });
const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = [...action.payload];
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    edit: (state, action) => {
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      state.items[index] = action.payload;
      return state;
    },
    deletetoDoItem: (state, action) => {
      const newState = state.items.filter((el) => el.id !== action.payload);
      state.items = newState;
      return state;
    },
    updateisDoneField: (state, action) => {
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      state.items[index] = action.payload;
      return state;
    },
  },
  // extraReducers: (builder) => {

  //   builder
  //     .addCase(getItemsAsynk.pending, (state) => {
  //       debugger
  //       state.status = "pending";
  //     })
  //     .addCase(getItemsAsynk.fulfilled, (state, action) => {
  //       debugger;
  //       state.items = [...state.items, ...action.payload];
  //       state.status = "fulfilled";
  //     });
  // },
});
export const { setItems, addItem, edit, deletetoDoItem,updateisDoneField } = toDosSlice.actions;
export default toDosSlice.reducer;

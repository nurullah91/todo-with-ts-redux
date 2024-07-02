import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: true });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

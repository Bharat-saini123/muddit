import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tableReducer from '../features/table/tableSlice';

// Define the root state type if needed
// You can replace 'RootState' with the actual type of your root state
// It might include the state managed by the 'todoReducer' and other reducers.
// For now, it's left as an empty interface.
interface RootState {}

// Combine reducers if you have multiple reducers
// const rootReducer = combineReducers({
//   table: tableReducer,
//   // Add other reducers here if needed
// });

// Create the store with the root reducer
 const store = configureStore({
  reducer:{
    table:tableReducer
  }
});

// Define the root state type for the store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;



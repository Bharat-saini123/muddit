import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Table {
  id: string;
  name: string;
  age: string;
  sex: string;
  mobile: string;
  govtid: string;
  idnum: string;
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
}

interface TableState {
  tables: Table[];
}

const initialState: TableState = {
  tables: [{ id: "1", name: "Hello World",age:"12",sex:"male",mobile:"8882223331",govtid:"adhaar",idnum:"111222333444",address:"Kanpur",state:"UP",city:"kanpur",country:"India",pincode:"161021" }],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<string>) => {
      const table: Table = {
        id: nanoid(),
        name: action.payload.name,
        age: action.payload.age,
        sex: action.payload.sex,
        mobile: action.payload.mobile,
        govtid: action.payload.govtid,
        idnum: action.payload.idnum,
        address: action.payload.address,
        state: action.payload.state,
        city: action.payload.city,
        country: action.payload.country,
        pincode: action.payload.pincode,
      };
      state.tables.push(table);
    },
    removeTable: (state, action: PayloadAction<string>) => {
      state.tables = state.tables.filter((table) => table.id !== action.payload);
    },
  },
});

export const { addTable, removeTable } = tableSlice.actions;

export default tableSlice.reducer;

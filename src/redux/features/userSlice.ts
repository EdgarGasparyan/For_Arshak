import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  username: string;
  number: string;
  street: string;
  apt: string;
  municipality: string;
  postalCode: string;
  telephone: string;
  otherTelephone: string;
  email: string;
}
const initialState: IUser = {
  username: "",
  number: "",
  street: "",
  apt: "",
  municipality: "",
  postalCode: "",
  telephone: "",
  otherTelephone: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getusers: (state, action) => {
      state.username = action.payload.username;
      state.number = action.payload.number;
      state.street = action.payload.street;
      state.apt = action.payload.apt;
      state.municipality = action.payload.municipality;
      state.postalCode = action.payload.postalCode;
      state.telephone = action.payload.telephone;
      state.otherTelephone = action.payload.otherTelephone;
      state.email = action.payload.email;
    },
  },
});

export const { getusers } = userSlice.actions;

export default userSlice.reducer;

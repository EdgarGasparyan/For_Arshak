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
     return {
        ...state,
        username: action.payload.username,
        number: action.payload.number,
        street: action.payload.street,
        apt: action.payload.apt,
        municipality: action.payload.municipality,
        postalCode: action.payload.postalCode,
        telephone: action.payload.telephone,
        otherTelephone: action.payload.otherTelephone,
        email: action.payload.email,
      };
    },
  },
});

export const { getusers } = userSlice.actions;

export default userSlice.reducer;

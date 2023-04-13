import React, { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Button, Input } from "@mui/material";
import { IUser } from "../../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getusers } from "../../redux/features/userSlice";
const Btl = () => {
  const userdata = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>({
    username: "",
    number: "",
    street: "",
    apt: "",
    municipality: "",
    postalCode: "",
    telephone: "",
    otherTelephone: "",
    email: "",
  });
  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //  const handleChange = (e: any) => {
  //    const { name, value } = e.target;
  //    setUser({
  //      ...user,
  //      [name]: {
  //        //@ts-ignore
  //        ...user[name],
  //        value,
  //      },
  //    });
  //  };

  const handleSubmit = () => {
    dispatch(getusers(user));
    setUser({
      username: "",
      number: "",
      street: "",
      apt: "",
      municipality: "",
      postalCode: "",
      telephone: "",
      otherTelephone: "",
      email: "",
    });
  };
  console.log(userdata);

  return (
    <div>
      <header className="header">
        <span className="sec_a">A</span>
        <h2>
          BETWEEN THE LESSOR <span>(WRITE LEGIBLY)</span>
        </h2>
      </header>
      <section className="btl_form">
        <FormControl fullWidth sx={{ m: 1 }}>
          <Input
            id="username"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
          {<FormHelperText id="username">Name</FormHelperText>}
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "10ch" }}>
          <Input
            name="number"
            onChange={handleChange}
            value={user.number}
            id="number"
          />
          <FormHelperText id="number">No.</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "38ch" }}>
          <Input
            id="street"
            name="street"
            value={user.street}
            onChange={handleChange}
          />
          <FormHelperText id="street">Street</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "18ch" }}>
          <Input id="apt" name="apt" value={user.apt} onChange={handleChange} />
          <FormHelperText id="apt">Apt.</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "46ch" }}>
          <Input
            id="municipality"
            name="municipality"
            onChange={handleChange}
            value={user.municipality}
          />
          <FormHelperText id="municipality">Municipality</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "22ch" }}>
          <Input
            id="postalCode"
            name="postalCode"
            value={user.postalCode}
            onChange={handleChange}
          />
          <FormHelperText id="postalCode">Postal Code</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "30ch" }}>
          <Input
            id="telephone"
            name="telephone"
            value={user.telephone}
            onChange={handleChange}
          />
          <FormHelperText id="telephone">Telephone No.</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "38ch" }}>
          <Input
            id="otherTelephone"
            name="otherTelephone"
            onChange={handleChange}
            value={user.otherTelephone}
          />
          <FormHelperText id="otherTelephone">
            Other Telephone No. (cell phone)
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Input
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <FormHelperText id="email">Email address</FormHelperText>
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </section>
    </div>
  );
};

export default Btl;

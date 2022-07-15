import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Input,
} from "@mui/material";

export const SignUp = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    fname: "",
    lname: "",
    email: "",
    pass: "",
  });
  const { fname, lname, email, pass } = formData;
  const [saveData, setSaveData] = useState("");
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    fname && lname && email && pass && setSaveData(formData);
  };
  useEffect(() => {
    saveData &&
      dispatch({
        type: "ADD_NEW",
        groups: saveData,
      }) &&
      navigate("/Login");
  }, [saveData]);
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <form onSubmit={(e) => handleSubmit(e)}>
              <InputLabel htmlFor="my-input"> Create a new Account </InputLabel>
              <br />
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">FirstName</InputLabel>
                <br />
                <Input
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => e.target.value && onInputChange(e)}
                  aria-describedby="my-helper-text"
                />
                <br />
              </FormControl>
              <br />
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <br />
                <Input
                  id="lname"
                  name="lname"
                  value={lname}
                  onChange={(e) => e.target.value && onInputChange(e)}
                  aria-describedby="my-helper-text"
                />
                <br />
              </FormControl>
              <br />
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <br />
                <Input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => e.target.value && onInputChange(e)}
                  aria-describedby="my-helper-text"
                />
                <br />
              </FormControl>
              <br />
              <FormControl fullWidth>
                <InputLabel placeholder="password" htmlFor="my-input">
                  Password
                </InputLabel>
                <br />
                <Input
                  type="password"
                  id="pass"
                  name="pass"
                  value={pass}
                  onChange={(e) => e.target.value && onInputChange(e)}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <br />
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>{" "}
              <br />
              <Link to="/Login">Already have an account?</Link>
            </form>
            <br />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

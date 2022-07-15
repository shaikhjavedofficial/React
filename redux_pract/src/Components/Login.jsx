import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Input,
} from "@mui/material";

export const Login = ({ handleLogin }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const selector = useSelector((state) => state.GroupReducer.groups);
  const [logged, setLogged] = useState(false);
  const [correct, setCorrect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    selector.map((item) => {
      (item.email.toLowerCase() == username.toLowerCase() ||
        item.email.split("@")[0].toLowerCase() == username.toLowerCase()) &&
      item.pass.toLowerCase() == pass.toLowerCase()
        ? setLogged(true)
        : setCorrect(true);
    });
  };
  useEffect(() => {
    logged == true && handleLogin(logged, username);
    logged == true && navigate("/employee"); //to route here after task completion
  }, [handleSubmit]);
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <form onSubmit={(e) => handleSubmit(e)}>
              <InputLabel htmlFor="my-input"> Login into E-Portal</InputLabel>
              <br />
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <br />
                <Input
                  type="text"
                  onClick={(e) => setCorrect(false)}
                  onChange={(e) => setUsername(e.target.value.split("@")[0])}
                  aria-describedby="my-helper-text"
                />
                <br />
                {correct == true ? (
                  <span style={{ color: "red" }}>username is incorrect</span>
                ) : (
                  <span></span>
                )}

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
                  onChange={(e) => setPass(e.target.value)}
                  aria-describedby="my-helper-text"
                />
                <br />
                {correct == true ? (
                  <span style={{ color: "red" }}>password is incorrect</span>
                ) : (
                  <span></span>
                )}
              </FormControl>
              <br />
              <br />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
              <br />
              <br />
              <Link to="/signup">Sign up for E-Portal</Link>
            </form>
            <br />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

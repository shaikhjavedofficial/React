import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Button,
  Box,
  Typography,
  makeStyles,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export const NavigationBar = ({ user, handleLogout }) => {
  const [logout, setLogout] = useState(true);
  const [userN, setUserN] = useState(user);
  const handleLog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLogout(false);
    handleLogout(false);
  };
  useEffect(() => {
    // handleLogout(logout);
  }, [handleLog]);
  useEffect(() => {
    setUserN(user);
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Portal
          </Typography>
          {userN != "" ? (
            <div>
              {!logout ? userN : ""}
              <Button color="inherit" onClick={(e) => handleLog(e)}>
                Logout
              </Button>
            </div>
          ) : (
            <Button color="inherit">
              <Link to="/Login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

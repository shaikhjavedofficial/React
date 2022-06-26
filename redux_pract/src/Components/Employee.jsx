import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  Button,
  Input,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";

export const Employee = () => {
  let navigate = useNavigate();
  const selector = useSelector((state) => state.GroupReducer.groups);
  const [aData, setAData] = useState(selector);
  const [toggle, setToggle] = useState(true);
  /////////////style///////////////////////////////
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 800,
    margin: "20px auto",
  };
  ///////////////////search/////////////////////////////
  const handleSearch = (e) => {
    const sData = selector.filter((item) => {
      if (e.target.value == "") {
        return item;
      }
      return (
        item.fname.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        item.lname.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
    });
    setAData(sData);
  };
  ////////////////////////////Delete////////////////////////
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const sData = aData.filter((item) => {
      return !item.id.toLowerCase().match(id.toLowerCase());
    });
    setAData(sData);
  };
  ////////////////////////////////////edit//////////////////////////////////////////////
  const handleEdit = (e, id, Fname, Lname, Email, Pass) => {
    setFormData({
      id: id,
      fname: Fname,
      lname: Lname,
      email: Email,
      pass: Pass,
    });
    e.preventDefault();
    e.stopPropagation();
    setToggle(false);
  };
  const [formData, setFormData] = useState({
    id: "",
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
    e.stopPropagation();
    setSaveData(formData);
    setToggle(true);
  };
  useEffect(() => {
    saveData &&
      dispatch({
        type: "EDIT",
        groups: saveData,
      }) &&
      navigate("/employee");
  }, [saveData]);
  return (
    <div>
      {toggle ? (
        <form>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Input
                  type="text"
                  placeholder="search here"
                  onChange={(e) => e.target.value && handleSearch(e)}
                  aria-describedby="my-helper-text"
                />
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Sr. No</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {aData.map((row, id) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {id + 1}
                          </TableCell>
                          <TableCell align="right">
                            {row.fname + " " + row.lname}
                          </TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                          <TableCell align="right">
                            <Button onClick={(e) => handleDelete(e, row.id)}>
                              Delete
                            </Button>
                            <Button
                              onClick={(e) =>
                                handleEdit(
                                  e,
                                  row.id,
                                  row.fname,
                                  row.lname,
                                  row.email,
                                  row.pass
                                )
                              }
                            >
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Paper>
          </Grid>
        </form>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <InputLabel htmlFor="my-input">Edit User</InputLabel>
                <br />
                <FormControl fullWidth>
                  <InputLabel htmlFor="my-input">FirstName</InputLabel>
                  <br />
                  <Input
                    id="fname"
                    name="fname"
                    value={fname}
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
                <br />
                <br />
                <Button type="submit" color="primary" variant="contained">
                  Submit
                </Button>{" "}
                <br />
              </Grid>
            </Paper>
          </Grid>
        </form>
      )}
    </div>
  );
};

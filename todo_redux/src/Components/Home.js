import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Button, Card, Divider } from "antd";
import Input from "antd/lib/input/Input";

export const Home = () => {
  const selector = useSelector((state) => state.TaskReducer.data);
  const [taskData, setTaskData] = useState(selector);
  const [dataAdd, setdataAdd] = useState("");
  const [dataEdit, setdataEdit] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isUpdate
      ? dispatch({
          type: "EDIT",
          data: dataEdit,
        }) && setIsUpdate(false)
      : dispatch({
          type: "ADD_NEW",
          data: {
            id: taskData.length + 1,
            todotask: dataAdd,
          },
        }) && setdataAdd("");
  };
  const handleEdit = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    setdataEdit({ id: i });
    setIsUpdate(true);
  };
  const handleDelete = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    setTaskData(selector);
  });
  useEffect(() => {
    setTaskData(selector);
  }, [dataEdit]);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginLeft: "400px",
          marginTop: "100px",
          width: "600px",
        }}
      >
        <h1>To-Do List</h1>
        <Card
          title={
            <Input
              value={
                isUpdate
                  ? taskData.map((item) => {
                      if (dataEdit.id == item.id) {
                        return item.todotask;
                      }
                    })
                  : dataAdd
              }
              onChange={(e) =>
                isUpdate
                  ? setdataEdit({ ...dataEdit, todotask: e.target.value })
                  : setdataAdd(e.target.value)
              }
            />
          }
          extra={<Button onClick={(e) => handleAdd(e)}>Add Task</Button>}
        >
          {taskData.map((item, i) => (
            <Divider key={i}>
              <p>
                {" "}
                {item.id}.{item.todotask}
              </p>
              <Button onClick={(e) => handleEdit(e, item.id)}>Edit</Button>
              <Button onClick={(e) => handleDelete(e, item.id)}>Delete </Button>
            </Divider>
          ))}
        </Card>
      </div>
    </div>
  );
};

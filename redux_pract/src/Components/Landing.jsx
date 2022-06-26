import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Button>
        {" "}
        <Link to="/employee"> show users</Link>
      </Button>
    </div>
  );
};

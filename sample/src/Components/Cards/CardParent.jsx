import { CardChild } from "./CardChild";
import "./CardReducer";
export const CardParent = ({ cardTitle, cardDesc, cardIMG }) => {
  return (
  <div>
      {<CardChild />}
  </div>
    );
};

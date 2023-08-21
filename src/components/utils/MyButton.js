import React from "react";
import Button from "@mui/material/Button";
import ticketIcon from "../../resources/images/icons/ticket.png";


function MyButton(props) {
  return (
    <Button
      href={props.link}
      target="_blank"
      size={props.size ? props.size : "medium"}
      variant="contained"
      style={{
        background: `url(${props.bg ? props.bg : "#8e8e8e"})`,
        color: "#ffffff",
      }}
    >
        <img src={ticketIcon}
            className="iconImage"
            alt="icon_button" 
        />
      {props.text}
    </Button>
  );
}

export default MyButton;

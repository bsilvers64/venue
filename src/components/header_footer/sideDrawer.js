import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  
    /* needs the element's id to go there */ 

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration:1000,
      delay:200,
      smooth:true,
      offset:-150
    })
    props.onClose(false)
  };

  const renderItem = (item) => (
    <ListItem
      button
      onClick={() => scrollToElement(item.where)}
      key={item.where}
    >
      {item.value}
    </ListItem>
  );

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      {/*triggers the parent onClose callback for the drawer to be closed* // it calls the parent's function*/}
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;

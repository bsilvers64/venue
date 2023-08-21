import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";
import royal_button from "../../resources/images/royal_bg.png";
import vip_button from "../../resources/images/vip_bg.png";
import basic_button from "../../resources/images/basic_bg.png";

function Pricing() {
  const priceState = {
    prices: [100, 150, 250],
    position: ["Floor", "Balcony", "VIP"],
    description: [
      "closer to the artist and stage than everyone else in the venue. you may even be able to get to the very front of the crowd and see the artist up close and personal",
      "balcony offers a great view of the entire concert, better acoustics, less noise from the crowd,  more privacy and a more intimate experience",
      "Early access to venue, exclusive VIP Lounge, Premium amenities, Dedicated VIP entrances, Special seating for best experience",
    ],
    linkto: [
      "https://www.vividseats.com/checkout?productionId=4536784&ticketId=VB8014528372&quantity=1&uuid=25e25b57-0ba7-46d9-b08a-dbe2d507fec8",
      "https://www.vividseats.com/checkout?productionId=4536784&ticketId=VB8057399328&quantity=2&uuid=03bbbb6b-50f2-444f-a07d-223067b1dabf&itemListName=Performer-MainProductionList",
      "https://www.vividseats.com/checkout?productionId=4536784&ticketId=VB8010909710&quantity=2&uuid=40b6cf3b-ca09-432d-b061-d95f0a635f3a&itemListName=Performer-MainProductionList",
    ],
    delay: [500, 0, 500],
    button: [basic_button, royal_button, vip_button],
  };

  const showboxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span> ${priceState.prices[index]}</span>
            <span> ${priceState.position[index]}</span>
          </div>
          <div className="pricing_description">
            {priceState.description[index]}
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              link={priceState.linkto[index]}
              bg={priceState.button[index]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showboxes()}</div>
      </div>
    </div>
  );
}

export default Pricing;

import React from "react";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

function Discount() {

    const end = 30;
    const [start, setStart] = useState(0);
    const percentage = () => {
        if (start < end) {
            setStart(  prevCount => prevCount+1)
        }
    };

    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(() => {
                setStart((prevCount) => prevCount + 1);
            }, 30)
        }
    }, [start])
    // useEffect listens to start property, if start value changes, useEffect re-renders the component

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before 20th september</h3>
            <p>
              Don’t miss the chance to see one of the world’s top touring acts
              on stage, buy 2023 Taylor Swift tickets from The Venue to
              experience her celebrated discography performed live in a city
              near you.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Discount;

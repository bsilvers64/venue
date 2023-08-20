import React from 'react'
import { Fade } from 'react-awesome-reveal'

function Footer() {
  return (
    <footer className="bck_red">
      <Fade delay={300}>
        <div>
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            The Venue 2023 all rights reserved
          </div>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer
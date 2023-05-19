import React from 'react';
import {faInstagram, faGithub, faLinkedin, faDiscord, faTelegram, faGoogle, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
       <Container>
        <div className='icon'>
          <a href='https://github.com/danielf9403'>
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href='https://www.linkedin.com/in/daniel-emanuel-funaru-4b59b722b/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <NavLink to="/contact">
            <FontAwesomeIcon icon={faGoogle} />
          </NavLink>

          <a href='https://api.whatsapp.com/send?phone=2678155443'>
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a href='https://www.instagram.com/daniel.ef94'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href='https://discord.com/channels/@Daniel%20Funaru#6756'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>

          <a href='https://t.me/DFunaru94'>
            <FontAwesomeIcon icon={faTelegram} />
          </a>

        </div>
       </Container>
    </div>
  );
};



export default Sidebar;
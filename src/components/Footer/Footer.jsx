import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaKickstarterK,
} from "react-icons/fa";
import { Contenidor } from "./FooterStyled";

const Footer = () => (
  <Contenidor>
    <p>More from Star Wars</p>
    <ul>
      <li>
        <a href='https://www.facebook.com/StarWars'>
          <i>
            <FaFacebook />
          </i>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/starwars/'>
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com/user/starwars'>
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/starwars'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://starwarskids.com/'>
          <FaKickstarterK />
        </a>
      </li>
    </ul>
    <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
    <ul>
      <li>
        <a href='terms'>Terms of Use</a>
      </li>
      <li>
        <a href='privacy'>Privacy Policy</a>
      </li>
      <li>
        <a href='privacy'>Privacy Rights</a>
      </li>
      <li>
        <a href='shopdisney'>Star Wars at shopDisney</a>
      </li>
      <li>
        <a href='helpdesk'>Star Wars Helpdesk</a>
      </li>
    </ul>
  </Contenidor>
);

export default Footer;

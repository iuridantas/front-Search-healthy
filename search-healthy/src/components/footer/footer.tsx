import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FooterComponent } from './style';

export function Footer() {
  return (
    <FooterComponent>
      <>
        <a
          href="https://www.linkedin.com/in/iurimota/"
          target="_blank"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a href="https://github.com/iuridantas" target="_blank">
          <FaGithub className="github" />
        </a>
        <a href="https://www.instagram.com/iuri.dantass/" target="_blank">
          <FaInstagram className="instagram" />
        </a>
      </>
    </FooterComponent>
  );
}

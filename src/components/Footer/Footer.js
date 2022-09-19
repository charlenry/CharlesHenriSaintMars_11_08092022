import classes from './Footer.module.css';
import whiteLogo from '../../assets/images/logos/kasa-logo-white.svg';

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <img className={classes.header_logo} src={whiteLogo} alt="Pied de page Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
import logo from "../../image/logo_welbex.svg";
import { Container } from "../../App";

import {
  Header_Component,
  Logo_Container,
  Logo,
  Logo_subtitle,
  Header_Nav,
  Nav_List,
  Header_Connection,
  Connection_tel,
  Connection_Social,
  Social_Icon,
} from "./style";

const Header = () => {
  return (
    <Container>
      <Header_Component>
        <Logo_Container>
          <a href="#">
            <Logo src={logo} alt="Логотип welbex" />
          </a>
          <Logo_subtitle>
            крупный интегратор CRM
            <br /> в Росcии и ещё 8 странах
          </Logo_subtitle>
        </Logo_Container>
        <Header_Nav>
          <Nav_List>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Виджеты</a>
            </li>
            <li>
              <a href="#">Интеграции</a>
            </li>
            <li>
              <a href="#">Кейсы</a>
            </li>
            <li>
              <a href="#">Сертификаты</a>
            </li>
          </Nav_List>
        </Header_Nav>
        <Header_Connection>
          <Connection_tel href="tel:+7 555 555-55-55">
            +7 555 555-55-55
          </Connection_tel>
          <Connection_Social>
            <a href="#">
              <Social_Icon className="icon-telegram"></Social_Icon>
            </a>
            <a href="#">
              <Social_Icon className="icon-viber"></Social_Icon>
            </a>
            <a href="#">
              <Social_Icon className="icon-whatsapp"></Social_Icon>
            </a>
          </Connection_Social>
        </Header_Connection>
      </Header_Component>
    </Container>
  );
};

export default Header;

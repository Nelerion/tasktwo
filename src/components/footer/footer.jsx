import { Container } from "../../App";
import { Social_Icon } from "../header/style";
import {
  Footer_Component,
  Footer_Links_leftBlock,
  Footer_Connection_rightBlock,
  Connection_Info,
  Footer_Title,
  Footer_Company_Link,
  Footer_Menu_Link,
  Menu_Group_Link,
  Links,
  Social,
  Footer_politic,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Footer_Component>
        <Footer_Links_leftBlock>
          <Footer_Company_Link>
            <Footer_Title>О компании</Footer_Title>
            <Links>
              <a href="#">Партнёрская программа</a>
              <a href="#">Вакансии</a>
            </Links>
          </Footer_Company_Link>
          <Footer_Menu_Link>
            <Footer_Title>Меню</Footer_Title>
            <Menu_Group_Link>
              <Links>
                <a href="#">Расчёт стоимости</a>
                <a href="#">Услуги</a>
                <a href="#">Виджеты</a>
                <a href="#">Интеграции</a>
                <a href="#">Наши клиенты</a>
              </Links>
              <Links>
                <a href="#">Кейсы</a>
                <a href="#">Благодарственные письма</a>
                <a href="#">Сертификаты</a>
                <a href="#">Блог на Youtube</a>
                <a href="#">Вопрос / Ответ</a>
              </Links>
            </Menu_Group_Link>
          </Footer_Menu_Link>
        </Footer_Links_leftBlock>
        <Footer_Connection_rightBlock>
          <Footer_Title>Контакты</Footer_Title>
          <Connection_Info>
            <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
            <Social>
              <a href="#">
                <Social_Icon className="icon-telegram"></Social_Icon>
              </a>
              <a href="#">
                <Social_Icon className="icon-viber"></Social_Icon>
              </a>
              <a href="#">
                <Social_Icon className="icon-whatsapp"></Social_Icon>
              </a>
            </Social>
            <address>Москва, Путевой проезд 3с1, к 902</address>
          </Connection_Info>
          <Footer_politic>
            <p>©WELBEX 2022. Все права защищены.</p>
            <a href="#">Политика конфиденциальности</a>
          </Footer_politic>
        </Footer_Connection_rightBlock>
      </Footer_Component>
    </Container>
  );
};

export default Footer;

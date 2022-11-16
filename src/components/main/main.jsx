import { Container } from "../../App";
import {
  AdviceTitle_Color,
  Color_,
  MediaAdvice_Gift_text,
  MediaAdvice_Gift,
  MediaAdvice_Title,
  MediaAdvice,
  Advice_Button,
  Gift_Text,
  Gift_Title,
  Advice_Gift,
  Advice_Gift_Block,
  Title_color,
  Advice_Title,
  Advice,
  Global_Subtitle,
  Welbex_Title,
  Global_Title,
  Global_Title_Info,
  Main_Container,
} from "./style";

const Main = () => {
  return (
    <Container>
      <Main_Container>
        <Global_Title_Info>
          <Global_Title>
            Зарабатывайте
            <br /> больше
            <br />
            <Welbex_Title>с WELBEX</Welbex_Title>
          </Global_Title>
          <Global_Subtitle>
            Развиваем и контролируем
            <br /> продажи за вас
          </Global_Subtitle>
        </Global_Title_Info>
        <Advice>
          <Advice_Title>
            <p>
              Вместе с 
              <Title_color>
                бесплатной
                <br /> консультацией
              </Title_color>{" "}
              мы дарим:
            </p>
          </Advice_Title>
          <Advice_Gift_Block>
            <Advice_Gift>
              <Gift_Title>Виджеты</Gift_Title>
              <Gift_Text>30 готовых решений</Gift_Text>
            </Advice_Gift>
            <Advice_Gift>
              <Gift_Title>Dashboard</Gift_Title>
              <Gift_Text>с показателями вашего бизнеса</Gift_Text>
            </Advice_Gift>
            <Advice_Gift>
              <Gift_Title>Skype Аудит</Gift_Title>
              <Gift_Text>
                отдела продаж
                <br />и CRM системы
              </Gift_Text>
            </Advice_Gift>
            <Advice_Gift>
              <Gift_Title>35 дней</Gift_Title>
              <Gift_Text>использования CRM</Gift_Text>
            </Advice_Gift>
          </Advice_Gift_Block>
          <Advice_Button>Получить консультацию</Advice_Button>
        </Advice>
        <MediaAdvice>
          <MediaAdvice_Title>
            <p>
              Вместе с 
              <AdviceTitle_Color>
                бесплатной
                <br /> консультацией
              </AdviceTitle_Color>{" "}
              мы дарим:
            </p>
          </MediaAdvice_Title>
          <MediaAdvice_Gift>
            <MediaAdvice_Gift_text>
              <Color_ />
              Skype аудит
            </MediaAdvice_Gift_text>
            <MediaAdvice_Gift_text>
              <Color_ />
              30 виджетов
            </MediaAdvice_Gift_text>
            <MediaAdvice_Gift_text>
              <Color_ />
              Dashboard
            </MediaAdvice_Gift_text>
            <MediaAdvice_Gift_text>
              <Color_ />
              Месяц аmoCRM
            </MediaAdvice_Gift_text>
          </MediaAdvice_Gift>
        </MediaAdvice>
      </Main_Container>
    </Container>
  );
};

export default Main;

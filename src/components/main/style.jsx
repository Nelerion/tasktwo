import styled from "styled-components";
import { devices } from "../../other/query";
import BG from "../../image/bg/bgMobile.png";

export const Main_Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 93px;
  @media ${devices.mobileL} {
    background: url(${BG}) no-repeat;
    background-size: cover;
    margin: 0;
  }
  @media ${devices.tabletMedium} {
    flex-direction: column;
    margin: 0;
    padding-left: 14px;
    padding-right: 5px;
    padding-top: 40px;
    padding-bottom: 55px;
  }
`;
export const Global_Title_Info = styled.section`
  display: flex;
  flex-direction: column;
  color: #e4e5ea;
  gap: 30px 0;
  @media ${devices.mobileL} {
    gap: 18px 0;
  }
`;
export const Global_Title = styled.h1`
  font-size: 48px;
  line-height: 58px;
  font-weight: 400;
  @media ${devices.mobileL} {
    font-size: 36px;
  }
`;
export const Welbex_Title = styled.span`
  background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
`;
export const Global_Subtitle = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const Advice = styled.aside`
  display: flex;
  flex-direction: column;
  width: 337px;
  margin-top: 18px;
  align-items: flex-end;
  @media ${devices.tabletMedium} {
    display: none;
  }
`;
export const Advice_Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 36px;
`;
export const Title_color = styled.span`
  background: linear-gradient(354deg, #fcb045 36.99%, #fd1d1d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
export const Advice_Gift_Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 10px;
  justify-content: flex-end;
`;
export const Advice_Gift = styled.div`
  display: flex;
  flex-direction: column;
  width: 153px;
  text-align: right;
  gap: 6px 0;
`;
export const Gift_Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e4e5ea;
`;
export const Gift_Text = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const Advice_Button = styled.div`
  display: flex;
  width: 262px;
  height: 61px;
  background: #4077f3;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4e5ea;
  margin-top: 60px;
  cursor: pointer;
`;

export const MediaAdvice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  display: none;
  @media ${devices.tabletMedium} {
    display: block;
    margin-top: 45px;
  }
`;
export const MediaAdvice_Title = styled(Advice_Title)`
  text-align: left;
  padding-bottom: 25px;
`;
export const MediaAdvice_Gift = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 0;
  justify-content: flex-start;
`;
export const MediaAdvice_Gift_text = styled.div`
  width: 50%;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e4e5ea;
  display: flex;
  align-items: center;
`;
export const Color_ = styled.span`
  display: block;
  width: 10px;
  height: 1px;
  margin-right: 5px;
  background: linear-gradient(354deg, #fcb045 36.99%, #fd1d1d 100%);
`;
export const AdviceTitle_Color = styled(Title_color)`
  text-transform: lowercase;
`;

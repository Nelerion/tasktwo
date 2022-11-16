import styled from "styled-components";
import { devices } from "../../other/query";

export const Footer_Component = styled.footer`
  display: flex;
  margin-top: 122px;
  justify-content: space-between;
  padding-bottom: 20px;
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    @media ${devices.mobileL} {
    font-size: 14px;
  }
  }
  @media ${devices.mobileL} {
    background: #0E1014;
    padding: 0 10px;
    padding-bottom:50px;
    font-size: 14px;
    margin-top: 50px;
  }
  @media ${devices.tabletMedium} {
    flex-direction: column;
  }
`;
export const Footer_Links_leftBlock = styled.div`
  display: flex;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;
export const Footer_Connection_rightBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  @media ${devices.tablet} {
    justify-content: space-between;
  }
  @media ${devices.tabletMedium} {
    align-self: flex-start;
    text-align: left;
    margin-top: 30px;
  }
`;
export const Connection_Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  
  a[href^="tel:"] {
     @media ${devices.mobileL} {
      font-size: 16px;
     }
}
`;
export const Footer_Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #656566;
  padding-bottom: 20px;
`;
export const Footer_Company_Link = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Footer_Menu_Link = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 98px;
  @media ${devices.tablet} {
    margin-left:0;
    margin-top:25px;
  }
`;
export const Menu_Group_Link = styled.div`
  display: flex;
  gap: 0 52px;
`;
export const Links = styled(Footer_Company_Link)`
  gap: 10px 0;
`;
export const Social = styled.div`
  display: flex;
  gap: 0 12px;
  justify-content: flex-end;
  @media ${devices.tabletMedium} {
    justify-content: flex-start;
  }
`;
export const Footer_politic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  margin-top: 70px;
  color: #e4e5ea;
  
  p {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
 
  a {
    font-family: "Montserrat";
    text-decoration-line: underline;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;


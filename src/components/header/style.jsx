import styled from "styled-components";
import { devices } from "../../other/query";

export const Header_Component = styled.header`
  display: flex;
  padding-top: 57px;
  @media ${devices.tabletMinus} {
    padding-top: 20px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobileL} {
    background: #0e1014;
    padding: 20px 15px;
  }
`;
export const Logo_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  @media ${devices.tabletPlus} {
    display: none;
  }
`;
export const Logo = styled.img`
  width: 140px;
  height: 24px;
`;
export const Logo_subtitle = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
`;
export const Header_Nav = styled.nav`
  margin-left: 53px;
  margin-top: 3px;

  @media ${devices.tabletPlus} {
    margin-left: 0;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
  /* @media ${devices.tabletPlus} {
    margin-left: 0;
    width: 100%;
  } */
`;
export const Nav_List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    display: block;
  }
  gap: 0 30px;
  width: 100%;
  @media ${devices.mobileL} {
    gap:0;
    text-transform: uppercase;
    & li:last-child {
      display: none;
    }
  }
  a {
    font-weight: 500;
  }

`;
export const Header_Connection = styled.div`
  display: flex;
  gap: 0 47px;
  margin-left: auto;
  margin-top: 3px;
  @media ${devices.laptop} {
    flex-direction: column;
  }
  @media ${devices.tabletMinus} {
    width: 100%;
    margin-left: 0;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;
export const Connection_tel = styled.a`
  font-weight: 500;
`;
export const Connection_Social = styled.div`
  display: flex;
  gap: 0 32px;
  @media ${devices.laptop} {
    justify-content: space-between;
  }
`;
export const Social_Icon = styled.span`
  display: block;
  font-size: 15px;
  @media ${devices.mobileL} {
    font-size: 24px;
  }
`;


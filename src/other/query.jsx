
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletMinus:"590px",
  tabletMedium: "716px",
  tablet: "768px",
  tabletPlus:"840px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletMinus: `(max-width: ${sizes.tabletMinus})`,
  tabletMedium: `(max-width: ${sizes.tabletMedium})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletPlus: `(max-width: ${sizes.tabletPlus})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

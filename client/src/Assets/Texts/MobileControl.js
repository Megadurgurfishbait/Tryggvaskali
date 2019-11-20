import Routes from "../../Routes";

const MobileText = {
  "/matsedill": {
    LeftArrow: {
      Link: `${Routes.frontPage}`,
      Title: "Forsíða"
    },
    RightArrow: {
      Link: `${Routes.whatwedo}`,
      Title: "Þjónusta"
    }
  },
  "/": {
    LeftArrow: {
      Link: `${Routes.gallery}`,
      Title: "About"
    },
    RightArrow: {
      Link: `${Routes.menu}`,
      Title: "Menu"
    }
  },
  "/thjonusta": {
    LeftArrow: {
      Link: `${Routes.menu}`,
      Title: "Matseðill"
    },
    RightArrow: {
      Link: `${Routes.gallery}`,
      Title: "Gallery"
    }
  },
  "/gallery": {
    LeftArrow: {
      Link: `${Routes.whatwedo}`,
      Title: "Þjónusta"
    },
    RightArrow: {
      Link: `${Routes.frontPage}`,
      Title: "Forsíða"
    }
  }
};

export default MobileText;

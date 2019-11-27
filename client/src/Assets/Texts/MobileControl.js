import Routes from "../../Routes";

const MobileText = {
  "/matsedill": {
    LeftArrow: {
      Link: `${Routes.frontPage}`,
      Title: "Forsíða"
    },
    RightArrow: {
      Link: `${Routes.whatwedo}/hopa`,
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
  "/gallery": {
    LeftArrow: {
      Link: `${Routes.whatwedo}`,
      Title: "Þjónusta"
    },
    RightArrow: {
      Link: `${Routes.frontPage}`,
      Title: "Forsíða"
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
  "/thjonusta/hopa": {
    LeftArrow: {
      Link: `${Routes.menu}`,
      Title: "Matseðill"
    },
    RightArrow: {
      Link: `${Routes.gallery}`,
      Title: "Gallery"
    }
  },
  "/thjonusta/gjafa": {
    LeftArrow: {
      Link: `${Routes.menu}`,
      Title: "Matseðill"
    },
    RightArrow: {
      Link: `${Routes.gallery}`,
      Title: "Gallery"
    }
  },
  "/thjonusta/veislu": {
    LeftArrow: {
      Link: `${Routes.menu}`,
      Title: "Matseðill"
    },
    RightArrow: {
      Link: `${Routes.gallery}`,
      Title: "Gallery"
    }
  }
};

export default MobileText;

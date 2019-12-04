import Routes from "../../Routes";

const BurgerMenuText = [
  { Number: `01`, Title: `Heim`, Link: `${Routes.frontPage}` },
  { Number: `02`, Title: `Matseðill`, Link: `${Routes.menu}` },
  { Number: `03`, Title: `Veisluþjónusta`, Link: `${Routes.whatwedo}`, nestedRoute: `veislu` },
  { Number: `04`, Title: `Hópamatseðill`, Link: `${Routes.whatwedo}`, nestedRoute: `hopa` },
  { Number: `05`, Title: `Gjafabréf`, Link: `${Routes.whatwedo}`, nestedRoute: `gjafa` },
  { Number: `06`, Title: `Gallerý`, Link: `${Routes.gallery}` }
];

const BurgerMenuTextEN = [
  { Number: `01`, Title: `Home`, Link: `${Routes.frontPage}` },
  { Number: `02`, Title: `Menu`, Link: `${Routes.menu}` },
  { Number: `03`, Title: `Catering`, Link: `${Routes.whatwedo}`, nestedRoute: `veislu` },
  { Number: `04`, Title: `Groups`, Link: `${Routes.whatwedo}`, nestedRoute: `hopa` },
  { Number: `05`, Title: `Gift Certificates`, Link: `${Routes.whatwedo}`, nestedRoute: `gjafa` },
  { Number: `06`, Title: `Gallery`, Link: `${Routes.gallery}` }
];

export { BurgerMenuText, BurgerMenuTextEN };

import React, { createContext, useState, useEffect } from "react";
import * as contentful from "contentful";

var client = contentful.createClient({
  space: "z0iy5bo5581u",
  accessToken: "hpVTgRog0HYeXXjZ226tXKJctIC9KhAFrTqD3ThvbIA"
});
export const FetchedImage = createContext();

const FetchedImageProvider = ({ children }) => {
  const [hadegismatsedill, setHadegismatsedill] = useState();
  const [tilbodsmatsedill, setTilbodsmatsedill] = useState();
  useEffect(() => {
    client
      .getEntry("6gDL5zkd8x4UMAZXb81nvZ")
      .then(entry => setTilbodsmatsedill(entry.fields.tilbodsmatsedill.fields.file.url))
      .catch(console.error);

    client
      .getEntry("7rm9xTN1AOg2PFJVcYRtpf")
      .then(entry => setHadegismatsedill(entry.fields.hadegismatsedill.fields.file.url))
      .catch(console.error);
  }, []);

  return (
    <FetchedImage.Provider value={{ hadegismatsedill, tilbodsmatsedill }}>
      {children}
    </FetchedImage.Provider>
  );
};

export default FetchedImageProvider;

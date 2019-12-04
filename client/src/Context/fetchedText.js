import React, { createContext, useState, useEffect } from "react";
import * as contentful from "contentful";

var client = contentful.createClient({
  space: "z0iy5bo5581u",
  accessToken: "hpVTgRog0HYeXXjZ226tXKJctIC9KhAFrTqD3ThvbIA"
});
export const FetchedText = createContext();

const FetchedTextProvider = props => {
  const [text, setText] = useState({});

  useEffect(() => {
    client.getEntries().then(response => {
      const obj = {};
      for (let { sys, fields } of response.items) {
        obj[sys.contentType.sys.id] = fields;
      }
      setText(obj);
    });
  }, []);

  return <FetchedText.Provider value={{ text }}>{props.children}</FetchedText.Provider>;
};

export default FetchedTextProvider;

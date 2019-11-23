import React from "react";

import { IFContainer, ErrorMessage, Input } from "./inputfield.styled";

const InputField = React.forwardRef(({ Text, Name, Placeholder, myType, isError }, ref) => (
  <IFContainer myType={myType}>
    {isError && <ErrorMessage> {isError} </ErrorMessage>}
    {myType === "textArea" ? (
      <textarea id={Name} ref={ref} placeholder={Placeholder} />
    ) : (
      <>
        <label htmlFor={Name}>{Text}</label>
        <Input type={myType} id={Name} ref={ref} placeholder={Placeholder} myType={myType} />
      </>
    )}
  </IFContainer>
));

export default InputField;

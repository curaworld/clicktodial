import React from "react";
import { Button } from "./DialNumber.styles";
import * as Flex from "@twilio/flex-ui";

export const DialNumber = ({ number }) => {
  const onClick = (number) => {
    Flex.Actions.invokeAction("StartOutboundCall", { destination: phoneNumber.current.value });
  };

  let phoneNumber = React.createRef();

  return (
    <div style={{ position: "absolute", left: "50%", top: "50%" }}>
      <input type="text" id="phoneNumber" ref={phoneNumber} />
      <Button
        type="button"
        value="CAll"
        onClick={onClick}>
        CALL
      </Button>
    </div>
  );
};

export default DialNumber



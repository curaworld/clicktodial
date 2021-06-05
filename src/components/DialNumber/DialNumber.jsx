import React from "react";
import { Button } from "./DialNumber.styles";
import * as Flex from "@twilio/flex-ui";

export const DialNumber = ({  }) => {
  const onClick = () => {
    let attributes = {};
    attributes = {"Cura_RPM_Id": 10};  // does Cura_RPM_Id need to go anywhere else
    Flex.Actions.invokeAction("StartOutboundCall", { destination: phoneNumber.current.value, taskAttributes:attributes });
  };

  let phoneNumber = React.createRef();

  return (
    <div style={{ position: "absolute", left: "50%", top: "50%" }}>
      <input type="text" id="phoneNumber" ref={phoneNumber} />
      <Button
        type="button"
        value="Call"
        onClick={onClick}>
        CALL
      </Button>
    </div>
  );
};

export default DialNumber



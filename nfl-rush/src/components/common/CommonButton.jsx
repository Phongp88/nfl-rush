import React from "react";
import { Button } from "react-bootstrap";
const CommonButton = ({ changeEvent, text, classText, variant, testId }) => (
  <Button data-testid={testId} variant={variant} className={classText} onClick={() => changeEvent()}>
    {text}
  </Button>
);

export { CommonButton };

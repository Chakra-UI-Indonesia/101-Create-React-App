import React from "react";
import { Button } from "@chakra-ui/react";

function index(props) {
  const { value } = props;
  return <Button {...props}>{value}</Button>;
}

export default index;

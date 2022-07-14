import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import BrandLogo from "../../../assets/img/layout/brandLogo.jpeg"
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img
      src={BrandLogo}
      alt=""
      style={{
        height: '52px',
        width:'275px',
        margin: '15px'
      }}
    />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;

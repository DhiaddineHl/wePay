import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import typography from "./foundations/typography"; 



const theme = extendTheme({
    colors,
    ...typography,
  
}
)

export default theme;

import { Box } from "@mui/material";

const Card = ({children, className}) => {
    return (
      <Box className = {`bg-gray-200 rounded-md w-full h-full p-4 ${className}`}>
         {children}
      </Box>
    );
}
export default Card;
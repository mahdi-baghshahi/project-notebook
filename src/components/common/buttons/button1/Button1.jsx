
import React from 'react';
import { Button } from '@mui/material';


const CustomButton = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#6A3EA1', 
        '&:hover': {
          backgroundColor: '#FFFFFF', 
          boxShadow:"none",
        },
        boxShadow:"none",
        width : "328px",
        height : "54px",
        border: "1px solid  #C8C5CB"  ,
        borderRadius:"100px",
        fontSize :"16px",
        lineHeight:"140%",
        fontWeight:"500",
        textTransform: 'none',
        position:"relative",
        fontFamily:"Roboto",

        
        ...sx,
      }}
      {...props} 
    >
      {children}
    </Button>
  );
};

export default CustomButton;
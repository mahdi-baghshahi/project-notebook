import { colors } from '@mui/material';
import React from 'react';

export default function Styledtext({ children, variant , sx }) {
  let style = {};

  switch(variant) {
    case 'h2' :
      style = { fontSize: '32px', fontWeight: "700", lineHeight: "120%", color: "#180E25"};
      break;
      case 'h3' :
      style = { fontSize: '24px', fontWeight: "700", lineHeight: "120%", color: "#000000"};
      break;
      case 'h4' :
      style = { fontSize: '20px', fontWeight: "700", lineHeight: "140%", color: "#180E25"};
      break;
      case 'h5' :
        style = {fontSize:'16px' , fontWeight:'500' , lineHeight: '140%' , color: '#180E25'};
        break;
      case 'h6' :
        style = {fontSize:'14px' , fontWeight:'700' , lineHeight: '140%' , color: '#180E25'};
      break;
      case 'p' :
      style = { fontSize: '16px', fontWeight: "400"  ,lineHeight: "140%", color: "#827D89"}; 
      break;
       case 'p1' :
      style = { fontSize: '12px', fontWeight: "400"  ,lineHeight: "100%", color: "#827D89"}; 
      break;
      case 'p2' :
      style = { fontSize: '12px', fontWeight: "400"  ,lineHeight: "100%", color: "#C8C5CB" }; 
      break;
      case 'p3' :
      style = { fontSize: '10px', fontWeight: "400"  ,lineHeight: "100%", color: "#C8C5CB" }; 
      break;
    default:
      style = { fontSize: "16px" };
  }
  const mergedStyle = { ...style , ...sx};
  
  return <p style={mergedStyle}>{children}</p>;
}




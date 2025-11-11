import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function Inputd({ typee, sx, placeholdertext, value, children, onChange, ...rest }) {
  return (
    <FormControl>
      <FormLabel 
        sx={{
          fontSize:"16px",
          fontWeight: 500, 
          lineHeight:"140%",
        }}
      >
        {children}
      </FormLabel>
      <Input
        placeholder={placeholdertext || 'Search...'}
        type={typee || 'text'}
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: '#EFEFEF', 
          '&:hover': {
            backgroundColor: '#EFEFEF', 
          },
          width : "328px",
          height : "54px",
          border:"1px solid #C8C5CB",
          borderRadius:"8px",
          fontSize :"16px",
          lineHeight:"140%",
          fontWeight:"500",
          textTransform: 'none',
          position:"relative",
          fontFamily:"Roboto",
          ...sx, 
        }}
        {...rest} 
      />
    </FormControl>
  );
}
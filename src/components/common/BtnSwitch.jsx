import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const BtnSwitch = styled(Switch)(({ theme }) => ({

    width: 44,       
    height: 24,    
    padding: 0,      

    '& .MuiSwitch-switchBase': {

        padding: 3, 
        
    
        '& .MuiSwitch-thumb': {
            width: 18,
            height: 18,
          
            backgroundColor: theme.palette.mode === 'light' ? '#6A3EA1' : '#fff',
        },

        '&.Mui-checked': {

            transform: 'translateX(20px)', 
            
            '& + .MuiSwitch-track': {
                
                backgroundColor: '#6A3EA1', 
                opacity: 1,
            },
            '& .MuiSwitch-thumb': {
              
                backgroundColor: '#fff', 
            },
        },
    },

  
    '& .MuiSwitch-track': {
        borderRadius: 24 / 2, 
        backgroundColor: '#EFE9F7',
        opacity: 1,
        
        '&::before, &::after': {
            content: 'none',
        },
    },
    

    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
    },
}));

export default BtnSwitch;
// import * as React from 'react';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';

// export default function Inputd({children , sx , placeholdertext }) {
//   return (
//     <FormControl >
//       <FormLabel 
//         sx={{
//           fontSize:"16px",
//           fontWeight:"500px",
//           lineHeight:"140%",
//         }}
//       >{children}</FormLabel>
//       <Input placeholder={placeholdertext}
//         sx={{
//           backgroundColor: '#ffffffff', 
//           '&:hover': {
//             backgroundColor: '#FFFFFF', 
//           },
//           width : "328px",
//           height : "54px",
//           border:"1px solid #C8C5CB",
//           borderRadius:"8px",
//           fontSize :"16px",
//           lineHeight:"140%",
//           fontWeight:"500",
//           textTransform: 'none',
//           position:"relative",
//           fontFamily:"Roboto",
//           ...sx,
//         }}
//       ></Input>
//     </FormControl>
//   );
// }
///////////////////////////
// import * as React from 'react';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import { type } from '@testing-library/user-event/dist/type';
// export default function Inputd({children ,typee, sx , placeholdertext, ...rest }) {
//   return (
//     <FormControl>
//       <FormLabel 
//         sx={{
//           fontSize:"16px",
//           fontWeight:"500px",
//           lineHeight:"140%",
//         }}
//       >
//         {children}
//       </FormLabel>
//       <Input
//         placeholder={placeholdertext}
//         type={typee}
//         sx={{
//           backgroundColor: '#ffffffff', 
//           '&:hover': {
//             backgroundColor: '#FFFFFF', 
//           },
//           width : "328px",
//           height : "54px",
//           border:"1px solid #C8C5CB",
//           borderRadius:"8px",
//           fontSize :"16px",
//           lineHeight:"140%",
//           fontWeight:"500",
//           textTransform: 'none',
//           position:"relative",
//           fontFamily:"Roboto",
//           ...sx,
//         }}
//         {...rest} 
//       />
//     </FormControl>
//   );
// }
//////////////////////////


// import React from 'react';
// // import FormControl from '@mui/joy/FormControl';
// // import {Input} from '@mui/joy/Input';
// import {Input} from '@mui/material';
// // import FormLabel from '@mui/joy/FormLabel'; // ❌ این خط دیگر لازم نیست
// import { FormControl } from '@mui/material';
// export default function Inputd({ typee, sx, placeholdertext, value, onChange, ...rest }) {
//   return (
//     // FormControl را می‌توان برای سادگی نگه داشت، اما FormLabel را حذف می‌کنیم.
//     <FormControl>
//       {/* ❌ FormLabel و {children} حذف می‌شوند */}
//       <Input
//         placeholder={placeholdertext || 'Search...'} // مقدار پیش‌فرض Search...
//         type={typee || 'text'}
//         value={value} // برای تبدیل به Controlled Component
//         onChange={onChange} // برای مدیریت تغییرات
//         sx={{
//           backgroundColor: '#EFEFEF', // 🎨 رنگ پس‌زمینه را برای شبیه شدن به عکس تغییر دهید
//           '&:hover': {
//             backgroundColor: '#EFEFEF', // رنگ هاور را یکسان کنید
//           },
//           // 📏 عرض را موقتاً برای تنظیم شدن کنار Backlink برمی‌داریم یا روی 100% تنظیم می‌کنیم
//           width: '100%', 
//           height: "44px", // 📏 ارتفاع را کمی کاهش دهید تا شبیه عکس شود
//           border: "none", // 🚫 در عکس، خط دور Input دیده نمی‌شود
//           borderRadius: "10px", // 🎨 گوشه‌ها را گردتر کنید
//           fontSize: "16px",
//           lineHeight: "140%",
//           fontWeight: "500",
//           fontFamily: "Roboto",
//           ...sx,
//         }}
//         {...rest} 
//       />
//     </FormControl>
//   );
// }


import React from 'react';
// 👈 اصلاح: باید هر دو کامپوننت FormControl و Input از @mui/material ایمپورت شوند
import { FormControl, Input } from '@mui/material';

export default function Inputd({ typee, sx, placeholdertext, value, onChange, ...rest }) {
  return (
    // FormControl یک Wrapper برای کنترل بهتر است
    <FormControl>
      <Input
        placeholder={placeholdertext || 'Search...'} // اگر placeholdertext پاس داده نشود، "Search..." نمایش داده می‌شود
        type={typee || 'text'}
        value={value} // برای تبدیل به Controlled Component
        onChange={onChange} // برای مدیریت تغییرات
        sx={{
          backgroundColor: '#EFEFEF', 
          '&:hover': {
            backgroundColor: '#EFEFEF', 
          },
          // استایل‌های شما:
          width: '100%', 
          height: "44px", 
          border: "none", 
          borderRadius: "10px", 
          fontSize: "16px",
          lineHeight: "140%",
          fontWeight: "500",
          fontFamily: "Roboto",
          // ... ترکیب استایل‌های اضافی پاس داده شده
          ...sx, 
        }}
        // سایر Props های ورودی را به Input پاس می‌دهد
        {...rest} 
      />
    </FormControl>
  );
}
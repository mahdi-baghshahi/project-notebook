import { Logoutt  , LockClosed , Bell , TextSize , cheveron_right} from "../Icons/Icons";

const iconSetting = [
    {lable : 'xxx' ,
        textitem : 'Change Password',
        IconComponent : LockClosed ,
        targetPath:'/settings/changpassword'
        // IconComponentlable : cheveron_right
    },
    {lable : 'Medium' ,
        textitem : 'Text Size',
        IconComponent : TextSize ,
        targetPath:'#'
    },
    
]

export default iconSetting;
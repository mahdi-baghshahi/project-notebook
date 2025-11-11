import Notetype from "../../assets/images/notetype/icon.svg";
import Notetype1 from "../../assets/images/notetype/icon (1).svg";
import Notetype2 from "../../assets/images/notetype/icon (2).svg";
import Notetype3 from "../../assets/images/notetype/icon (3).svg";
import Notetype4 from "../../assets/images/notetype/icon (4).svg";



const notetypes = [
    {title:"Interesting Idea" , 
        subtitle:"Use free text area, feel free to write it all",
        icon:Notetype,
        backgroundColor:"#6A3EA1",
        subtitleColor: '#EFE9F7',
        path:"/interesting"
        // path:"/interesting/:noteId"
    },
    {title:"Buying Something" , 
        subtitle:"Use checklist, so you won’t miss anything",
        icon:Notetype1,
        backgroundColor:"#60D889",
        subtitleColor: '#1F7F40',
        path:"/buying"
    },
    {title:"Goals" , 
        subtitle:"Near/future goals, notes and keep focus ",
        icon:Notetype2,
        backgroundColor:"#F8C715",
        subtitleColor: '#725A03',
        path:"/goals"
    },
    {title:"Guidance" , 
        subtitle:"Create guidance for routine activities",
        icon:Notetype3,
        backgroundColor:"#CE3A54",
        subtitleColor: '#F7DEE3',
        path:"/guidance"
    },
    {title:"Routine Tasks", 
        subtitle:"Checklist with sub-checklist",
        icon:Notetype4,
        backgroundColor:"#DEDC52",
        subtitleColor: '#565510',
        path:"/routin"
    },

]

export default notetypes; 
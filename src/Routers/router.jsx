import ForgotPassword from "./../pages/Login/ForgotPassword/Forgotpassword";
import Login  from "./../pages/Login/Logins/Login";
import Register from "./../pages/Login/Register/Register";
import Onboarding1 from "./../pages/Login/Onboarding/Onboarding";
import CreateANewPassword from "./../pages/Login/CreateANewpassword/Creat-a-new-password";
import EmailCode from "./../pages/Login/EmailCode/EmailCode";
import Home0Notes from "./../pages/Homes/Home-0/Home-0 Notes";
import BottomNavbar from "./../components/common/BottomNavbar/BottomNavbar";
import CreateNewNotes from "./../pages/CreateNewNotes/CreatNewNote/CreateNewNotes";
import Buying from "./../pages/CreateNewNotes/Buying/Buying";
import Guidance from "./../pages/CreateNewNotes/Guidance/Guidance";
import Interesting from "./../pages/CreateNewNotes/Interesting/Interesting";
import Goals from "./../pages/CreateNewNotes/Goals/Goals";
import Finished from "./../pages/Homes/Finished-0/Finished";
import Settings from "./../pages/Settings/setting/Settings";
import ChangePassword from "./../pages/Settings/changepassword/ChangePassword";
import EditProfile from "./../pages/Settings/editprofile/EditProfile";
import Notification from "./../pages/Settings/popUp/notficationSetting/Notification";
import Pointmodal from "./../components/pop/Pointmodal/Pointmodal";
import LogOuttt from "./../pages/Settings/popUp/logOut/LogOut";
import Routin from "./../pages/CreateNewNotes/Routin/Routin";
import Search from "./../pages/Search/Search";
import { Children } from "react";



let routes = [
  { path: '/', element: <Onboarding1 /> },
  { path: '/settings', element: <Settings /> },
  {path: '/settings/changpassword', element: <ChangePassword />},
  {path: '/settings/editprofile',element: <EditProfile />,}, 
  { path: '/log', element: <LogOuttt /> },
  { path: '/notfication', element: <Notification /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgotpassword', element: <ForgotPassword /> },
  { path: '/creatnewpassword', element: <CreateANewPassword /> },
  { path: '/emailcode', element: <EmailCode /> },
  // { path: '/changpassword', element: <ChangePassword /> },
  // { path: '/editprofile', element: <EditProfile /> },
  { path: '/point', element: <Pointmodal /> },
  // { path: '/interesting/:noteId', element: <Interesting /> },
  { path: '/interesting', element: <Interesting /> },
  { path: '/buying', element: <Buying /> },
  { path: '/guidance', element: <Guidance /> },
  { path: '/goals', element: <Goals /> },
  { path: '/routin', element: <Routin /> },
  { path: '/search', element: <Search /> },
  { path: '/creatnewnotes', element: <CreateNewNotes /> },

  { path: '/home0notes', 
    element: (
      <>
        <Home0Notes />
        <BottomNavbar />
      </>
    )
  },
  { path: '/finished', 
    element: (
      <>
        <Finished />
        <BottomNavbar />
      </>
    )
  }

];

  export default routes;

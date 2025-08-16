import "@fontsource/inter";
import SalesAds from "./shared-components/SalesAds/page";
import NavBar from "./shared-components/NavBar/page";
import { Footer } from "./shared-components/Footer/page";
import  CreateAccount  from "./signupPage/page";

import HomePage  from "./homePage/page";

export default function Home() {
  return (
    <>
    <SalesAds />
    <NavBar/>
    <CreateAccount/>
    <Footer/>
  


    </>
  );
}
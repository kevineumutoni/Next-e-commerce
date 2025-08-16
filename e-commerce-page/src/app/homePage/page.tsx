import NewArrivals from "./components/NewArrival/index";
import  ExploreProducts  from "./components/ExploreProducts/index";
import BestSellingProducts from "./components/BestSellingProducts/index";
import BrowseByCategory from "./components/BrowseByCategory/index";
import FreshSales from "./components/FreshSales/index";
import AdsBanner from "./components/AdsSection/index";
import SalesAds from "../shared-components/SalesAds/page";
import NavBar from "../shared-components/NavBar/page";
import { Footer } from "../shared-components/Footer/page";

export default function HomePage(){
  return(
    <>
    <SalesAds/>
    <NavBar/>

     <AdsBanner/>
      <FreshSales/>
      <BrowseByCategory/>
      <BestSellingProducts/>
      <ExploreProducts/>
      <NewArrivals/>
      <Footer/>
  
   
  
    
    
    </>


  )
 
}
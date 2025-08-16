import NewArrivals from "./components/NewArrival/page";
import  ExploreProducts  from "./components/ExploreProducts/page";
import BestSellingProducts from "./components/BestSellingProducts/page";
import BrowseByCategory from "./components/BrowseByCategory/page";
import FreshSales from "./components/FreshSales/page";
import AdsBanner from "./components/AdsSection/page";
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
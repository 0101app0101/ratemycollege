import Cards from "./components/Cards";
import Colleges from "./components/Colleges";
import Ratingpg from "./components/Ratingpg";



import Stuff from "./components/Stuff";
import Reviews from "./components/Reviews";
import Ratings from "./components/Ratings";
import Banner from "./components/Banner";
import Addclg from "./components/Addclg"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeScreen from "./Screens/HomeScreen";
import ReviewScreen from "./Screens/ReviewScreen"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import CollegeReviewForm from "./components/CollegeReviewForm";

function App() {
  return(

  
    
         
    <Router>
            <>
        <NavBar/>
        <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/Review" component={ReviewScreen}/>
        </Switch>
        </>
     
        </Router>
     
   
   
   



    
  

 
  );
}

export default App;

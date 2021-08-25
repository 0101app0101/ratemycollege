import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <Cards></Cards>
      <Stuff></Stuff>
      <Contact></Contact>
      <Footer></Footer>
    
    </div>
  );
}

export default App;

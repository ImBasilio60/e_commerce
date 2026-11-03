import Navigation from "./navigations/Navigation";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
const App = () => {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
};

export default App;

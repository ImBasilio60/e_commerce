import "./Sidebar.css";
import Category from "./category/Category.js";
import Price from "./price/Price.js";
import Colors from "./colors/Colors.js";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;

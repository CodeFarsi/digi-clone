import { Address } from "./Address";
import { AmazingItems } from "./AmazingItems";
import "./App.css";
import { MiddleMenu } from "./MiddleMenu";
import { NavBar } from "./NavBar";
import { Slider } from "./Slider";
import { UserNav } from "./UserNav";

function App() {
  return (
    <div
      className="bg-gray-300 w-screen flex flex-col overflow-y-auto"
      dir="rtl"
    >
      <div className="w-full h-44 bg-white flex flex-col p-4 divide-y-2 divide-gray-100">
        <NavBar />
        <UserNav />
        <Address />
      </div>
      <Slider />
      <MiddleMenu />
      <AmazingItems />
    </div>
  );
}

export default App;

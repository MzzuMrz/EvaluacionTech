import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Controllers from "./components/Controllers";

function App() {
  return (
    <div className="bg-secondary h-screen flex flex-col relative">
      <Header />
      <div className="flex flex-grow">
        <SideBar />
      </div>
      <Controllers />
    </div>
  );
}

export default App;

import TopBar from "./components/topbar";
import BottomBar from "./components/bottombar";

function App() {
  return (
    <>
      <TopBar />
      <main style={{ minHeight: "120vh" }} />
      <BottomBar />
    </>
  );
}

export default App;

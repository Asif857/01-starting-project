import CoreConcepts from "./components/coreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

// Hooks have 2 simple rules:
// 1. be inside a component.
// 2. be at the upper layer of the component.
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />  
      </main>
    </>
  );
}

export default App;

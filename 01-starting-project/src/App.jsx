import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  //useState는 가장 위에 선언되어야함

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}
//
export default App;

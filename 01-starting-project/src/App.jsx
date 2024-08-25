import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/Coreconcept";
import TabButton from "./components/TabButton";

function App() {
  function handelSelect() {
    console.log("hello world - select");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-comcept">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton>Components</TabButton> */}
            {/* <TabButton label="Components" /> */}
            <TabButton onSelect={handelSelect}>Components</TabButton>
            <TabButton onSelect={handelSelect}>JSX</TabButton>
            <TabButton onSelect={handelSelect}>Props</TabButton>
            <TabButton onSelect={handelSelect}>State</TabButton>
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}
//
export default App;

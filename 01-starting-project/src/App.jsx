import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/Coreconcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  //useState는 가장 위에 선언된어야함
  const [selectedTopic, setSelectedTopic] = useState();

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            <TabButton onSelect={() => handelSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handelSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handelSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handelSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
//
export default App;

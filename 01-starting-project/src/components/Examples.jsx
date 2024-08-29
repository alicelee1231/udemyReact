import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* <TabButton>Components</TabButton> */}
        {/* <TabButton label="Components" /> */}
        <TabButton
          isSelected={selectedTopic === "component"}
          onSelect={() => handelSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handelSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handelSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handelSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}

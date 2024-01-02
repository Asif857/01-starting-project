import { useState } from "react";

import Section from "./Section";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
  //Notice that the useState hook sort of adds a var (selectedTopic in this time) to the state
  // and allows us to change it's value using the setSelectedTopic function.
  // The reason we need to use it like this, is because when we use the set function, it
  // tells react to load the UI for this specific var (selectedTopic in this example) again.
  // Otherwise - changes we do won't be seen in the ui.
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        {" "}
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

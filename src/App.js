import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabContent from "./components/TabContent";
import TabButton from "./components/TabButton";

// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const tabs = ["components", "jsx", "props", "state"];
  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((c, i) => (
              <CoreConcept {...c} key={c.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            {tabs.map((t) => (
              <TabButton
                key={t}
                onSelect={() => handleSelect(t)}
                isSelected={t === selectedTopic}
              >
                {t}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;

import CoreConcept from "./Coreconcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

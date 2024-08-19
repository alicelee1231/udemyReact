import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {

  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <img src="..." alt='...'/>
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-comcept">
        <h2>Core Concept</h2>
        <ul>
          <CoreConcept title="Components" description="The core UI building block"
          image={componentsImg}
          />
        </ul>
        </section>
      </main>
    </div>
  );
}
// 
export default App;

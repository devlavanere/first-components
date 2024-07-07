import Header from "./components/Header"
import HelloWorld from "./components/HelloWorld"
import Footer from "./components/Footer"
import "./App.css"

const frases = {
  saudacao: "Hello World, sou o Lavanere",
  frase: "Ou Michel, depende."
}

const footer = {
  direitos: "©️ Michel L. Sampaio"
}

function App() {
  return (
    <div className="container-app">
      <Header />
      <HelloWorld props={frases} />
      <Footer props={footer}/>
    </div>
  )
}

export default App

import Sidebar from './conponents/Sidebar';
import MainContent from './conponents/main';
import "./styles/components/app.sass";
function App() {

  return (
    <div id="portfolio">
      <h1>Fernando Calixto</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App

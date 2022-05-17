import './app.css'
import { Container } from './components/container';
import { ModalContextProvider } from './contexts/modalOpen';


function App() {
  return (
    <ModalContextProvider>
      <div className="App">
        <Container />
      </div>
    </ModalContextProvider>
  );
}

export default App;

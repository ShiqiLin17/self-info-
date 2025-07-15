import Header from './Header';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="App">
      <Header name="Shiqi Lin" />
      <div className="content">
        <AboutMe />
        <Hobbies />
      </div>
    </div>
  );
}

export default App;

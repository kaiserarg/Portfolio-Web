import React, {useState} from 'react';
import './App.css';
import Dial from './Dial';
import Header from './Header';
import Home from './pages/home';
import CoolThings from './pages/coolthings';
import Experience from './pages/experience';
import Projects from './pages/projects';
import About from './pages/about';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderOptionComponent = () => {
    switch (selectedOption) {
      case "home":
        return <Home />;
      case "coolthings":
        return <CoolThings />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      default:
        return <Home />; 
    }
  };

  return (
    <div>
      <Header></Header>
      {renderOptionComponent()}
      <Dial onOptionSelect={handleOptionSelect} />
    </div>
  );
};

export default App;

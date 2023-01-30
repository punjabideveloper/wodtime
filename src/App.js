import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons.jsx';
import Plans from './components/Plans/Plans.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Join from './components/Join/Join.jsx';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
    </div>
  );
}

export default App;

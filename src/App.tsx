import './App.css';
import { Header } from './components/header';
import { InteractiveModel } from './components/InteractiveModel';
import { TextSection } from './components/textSection';
import { ListSection } from './components/listSection';
import { SubscriptionCard } from './components/SubscriptionCard';
import { Locations } from './components/Locations';

function App() {
  return (
    <div className="App">
     <Header/>
     <InteractiveModel/>     
     <TextSection/>
     <ListSection/>
     <SubscriptionCard/>
     <Locations/>
    </div>
  );
}

export default App;

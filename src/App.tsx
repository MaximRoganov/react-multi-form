import styles from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import stepsListData from './data/stepsListData';
import FinalContent from './components/FinalContent/FinalContent';

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  function stepForwardHandler() {
    if (activeStep < stepsListData.length) {
      setActiveStep(activeStep + 1);
    }
  }

  function stepBackHandler() {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  }

  function stepToHandler(step: number) {
    setActiveStep(step);
  }

  function setConfirmedHandler() {
    setIsConfirmed(true);
  }

  return (
    <div className={styles.app}>
      <Sidebar activeStep={activeStep} stepsListData={stepsListData} />
      <div className={styles.main_info}>
        {isConfirmed ? (
          <FinalContent />
        ) : (
          <>
            <Header activeStep={activeStep} stepsListData={stepsListData} />
            <MainContent
              activeStep={activeStep}
              stepToHandler={stepToHandler}
            />
            <Navigation
              activeStep={activeStep}
              stepsNumber={4}
              stepForwardHandler={stepForwardHandler}
              stepBackHandler={stepBackHandler}
              setConfirmedHandler={setConfirmedHandler}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

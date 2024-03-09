import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import stepsListData from "/src/data/stepsListData"

function App() {
  const [activeStep, setActiveStep] = useState(1);

  function stepForwardHandler(){
    if(activeStep < stepsListData.length){
      setActiveStep(activeStep + 1);
    }
  }

  function stepBackHandler(){
    if(activeStep > 1){
      setActiveStep(activeStep - 1);
    }
  }

  return (
      <div className={styles.app}>
        <Sidebar activeStep={activeStep} stepsListData={stepsListData}/>
        <div className={styles.main_info}>
          <Header activeStep={activeStep} stepsListData={stepsListData}/>
          <MainContent activeStep={activeStep}/>
          


          <Navigation activeStep={activeStep} stepsNumber={4} stepForwardHandler={stepForwardHandler} stepBackHandler={stepBackHandler}/>

        </div>
      </div>
  )
}

export default App

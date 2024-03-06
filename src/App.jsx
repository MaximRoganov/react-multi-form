import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
// import PlanSelection from "./components/PlanSelection/PlanSelection";
// import AddonSelection from "./components/AddonSelection/AddonSelection";
// import SummaryTable from "./components/SummaryTable/SummaryTable";


function App() {
  const [activeStep, setActiveStep] = useState(1);

  const stepsListData = [
    {title:'YOUR INFO', header: 'Personal info', description: 'Please provide your name, email address, and phone number.'},
    {title:'SELECT PLAN', header: 'Select your plan', description: 'You have the option of monthly or yearly billing.'},
    {title:'ADD-ONS', header: 'Pick add-ons',description: 'Add-ons help enhance your gaming experience.'},
    {title:'SUMMARY', header: 'Finishing up',description: 'Double-check everything looks OK before confirming.'}
  ];

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

          <div className={styles.main_info_content}>
            <PersonalInfo/>
          </div>


          <Navigation activeStep={activeStep} stepsNumber={4} stepForwardHandler={stepForwardHandler} stepBackHandler={stepBackHandler}/>

        </div>
      </div>
  )
}

export default App

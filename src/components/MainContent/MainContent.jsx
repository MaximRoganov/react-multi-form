import styles from "./MainContent.module.css";
import PersonalInfo from "./forms/PersonalInfo/PersonalInfo";
import PlanSelection from "./forms/PlanSelection/PlanSelection";
import AddonSelection from "./forms/AddonSelection/AddonSelection";
import SummaryTable from "./forms/SummaryTable/SummaryTable";
import { useState } from "react";
import { FormDataContext } from "./../../Context";
import planData from "/src/data/planData";

export default function MainContent({ activeStep, stepToHandler }) {
  const initialFormData = {
    userName: "",
    email: "",
    phone: "",
    planId: planData[0].id,
    isMonthlyPrice: true,
    addonsIds: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  // console.log(formData);

  function handleChangeFormData(key, value) {
    const updatedFormData = { ...formData, [key]: value };
    setFormData(updatedFormData);
  }

  return (
    <FormDataContext.Provider value={{ formData, handleChangeFormData }}>
      <div className={styles.main_info_content}>
        {activeStep === 1 && <PersonalInfo />}
        {activeStep === 2 && <PlanSelection />}
        {activeStep === 3 && <AddonSelection />}
        {activeStep === 4 && <SummaryTable stepToHandler={stepToHandler} />}
      </div>
    </FormDataContext.Provider>
  );
}

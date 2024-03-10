import styles from "./MainContent.module.css";
import PersonalInfo from "./forms/PersonalInfo/PersonalInfo";
import PlanSelection from "./forms/PlanSelection/PlanSelection";
import AddonSelection from "./forms/AddonSelection/AddonSelection";
import SummaryTable from "./forms/SummaryTable/SummaryTable";
import { useState } from "react";
import planData from "/src/data/planData";

const initialFormData = {
  userName: "",
  email: "",
  phone: "",
  planId: planData[0].id,
  isMonthlyPrice: true,
  addonsIds: [],
};

export default function MainContent({ activeStep, stepToHandler}) {
  const [formData, setFormData] = useState(initialFormData);

  // console.log(formData);

  function handleChangeFormData(key, value) {
    const updatedFormData = { ...formData, [key]: value };
    setFormData(updatedFormData);
  }

  return (
    <div className={styles.main_info_content}>
      {activeStep === 1 && (
        <PersonalInfo
          handleChangeFormData={handleChangeFormData}
          formData={formData}
        />
      )}
      {activeStep === 2 && (
        <PlanSelection
          handleChangeFormData={handleChangeFormData}
          formData={formData}
        />
      )}
      {activeStep === 3 && (
        <AddonSelection
          formData={formData}
          handleChangeFormData={handleChangeFormData}
        />
      )}
      {activeStep === 4 && <SummaryTable stepToHandler={stepToHandler} formData={formData} />}
    </div>
  );
}

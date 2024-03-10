import PeriodSwitcher from "./PeriodSwitcher/PeriodSwitcher";
import PlanItem from "./PlanItem/PlanItem";
import styles from "./PlanSelection.module.css";
import planData from "/src/data/planData";

export default function PlanSelection({
  formData,
  handleChangeFormData
}) {
  return (
    <>
      <div className={styles.plansList}>
        {planData.map((plan) => (
          <PlanItem
            handleChangeFormData={handleChangeFormData}
            key={plan.id}
            plan={plan}
            checked={formData.planId === plan.id}
            isMonthlyPrice={formData.isMonthlyPrice}
          />
        ))}
      </div>
      <PeriodSwitcher isMonthlyPrice={formData.isMonthlyPrice} handleChangeFormData={handleChangeFormData}/>
    </>
  );
}

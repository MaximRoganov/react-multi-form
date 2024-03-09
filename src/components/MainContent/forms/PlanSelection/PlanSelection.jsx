import PlanItem from "./PlanItem/PlanItem";
import styles from "./PlanSelection.module.css";
import planData from "/src/data/planData";


export default function PlanSelection({selectedPlanId}) {

  return (
    <>
      <div className={styles.plansList}>
        {planData.map((plan) => (
          <PlanItem key={plan.id} plan={plan} checked={selectedPlanId === plan.id} />
        ))}
      </div>
      <div className={styles.periodSwitcher}>
        <label>
          <p>Monthly</p>
          <input type="radio" name="period" value="monthly" />
        </label>
        <label>
          <p>Yearly</p>
          <input type="radio" name="period" value="yearly" />
        </label>
      </div>
    </>
  );
}

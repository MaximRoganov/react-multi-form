import styles from "./PlanSelection.module.css"

export default function PlanSelection(){
  return (
  <>
    <div className={styles.plansList}>
      <div className={styles.plan}>
        <div className="img-wrap">
          <img src="/src/assets/plan1.svg" />
        </div>
        <div className="plan-title">
          Arcade
        </div>
        <div className="plan-price">
          $9/mo
        </div>
      </div>
      <div className={styles.plan}>
        <div className="img-wrap">
          <img src="/src/assets/plan2.svg" />
        </div>
        <div className="plan-title">
          Advanced
        </div>
        <div className="plan-price">
          $12/mo
        </div>
      </div>
      <div className={styles.plan}>
        <div className="img-wrap">
          <img src="/src/assets/plan3.svg" />
        </div>
        <div className="plan-title">
          Pro
        </div>
        <div className="plan-price">
          $15/mo
        </div>
      </div>
    </div>
    <div className={styles.periodSwitcher}>
      <label>
        <p>Monthly</p>
        <input type="radio" name="period" checked/>
      </label>
      <label>
        <p>Yearly</p>
        <input type="radio" name="period"/>
      </label>
      

    </div>
  </>
  );
}
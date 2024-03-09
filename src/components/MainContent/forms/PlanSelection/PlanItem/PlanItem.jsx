import styles from './PlanItem.module.css'

export default function PlanItem({plan,checked}) {
  return (
    <label className={styles.plan}>
      <input type="radio" name="planType" checked={checked}/>
      <div className="img-wrap">
        <img src={plan.icon} />
      </div>
      <div className="plan-title">{plan.title}</div>
      <div className="plan-price">${plan.monthPrice}/mo</div>
      <div className="plan-price">${plan.yearPrice}/yr</div>
      <div>2 months free</div>
    </label>
  );
}

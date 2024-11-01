import styles from './PlanItem.module.css';

export default function PlanItem({
  plan,
  checked,
  handleChangeFormData,
  isMonthlyPrice,
}) {
  return (
    <label className={styles.plan}>
      <input
        onChange={() => {
          handleChangeFormData('planId', plan.id);
        }}
        type="radio"
        name="planType"
        checked={checked}
      />
      <div className="img-wrap">
        <img src={plan.icon} />
      </div>
      <div className="plan-title">{plan.title}</div>
      {isMonthlyPrice ? (
        <div className="plan-price">${plan.monthPrice}/mo</div>
      ) : (
        <>
          <div className="plan-price">${plan.yearPrice}/yr</div>
          <div>2 months free</div>
        </>
      )}
    </label>
  );
}

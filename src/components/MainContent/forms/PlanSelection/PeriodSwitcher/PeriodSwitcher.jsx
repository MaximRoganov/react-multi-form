import style from "./PeriodSwitcher.module.css";

export default function PeriodSwitcher({
  isMonthlyPrice,
  handleChangeFormData,
}) {
  return (
    <div className={style.periodSwitcher}>
      <label>
        <p>Monthly</p>
        <input
          type="radio"
          name="period"
          value="monthly"
          onChange={() => {
            handleChangeFormData("isMonthlyPrice", true);
          }}
          checked={isMonthlyPrice}
        />
      </label>
      <label>
        <p>Yearly</p>
        <input
          type="radio"
          name="period"
          value="yearly"
          onChange={() => {
            handleChangeFormData("isMonthlyPrice", false);
          }}
          checked={!isMonthlyPrice}
        />
      </label>
    </div>
  );
}

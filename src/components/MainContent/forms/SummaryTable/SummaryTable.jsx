import style from "./SummaryTable.module.css";
import SummaryTableAddonRow from "./SummaryTableAddonRow/SummaryTableAddonRow";
import planData from "/src/data/planData";
import addonsData from "/src/data/addonsData";

export default function SummaryTable({ formData, stepToHandler }) {
  const { addonsIds, isMonthlyPrice, planId } = formData;
  const currentPlan = planData.find((plan) => plan.id === planId);
  const currentPlanTitle = currentPlan.title;
  const currentPlanPriceInfo = isMonthlyPrice
    ? `${currentPlan.monthPrice}/mo`
    : `${currentPlan.yearPrice}/yr`;
  const paymentPeriodTitle = isMonthlyPrice ? "Monthly" : "Yearly";

  const addonsPrice = addonsIds.reduce((summ, addonId) => {
    const addon = addonsData.find((addon) => addon.id === addonId);

    return summ + (isMonthlyPrice ? addon.monthPrice : addon.yearPrice);
  }, 0);

  const planPrice = isMonthlyPrice
    ? currentPlan.monthPrice
    : currentPlan.yearPrice;

  const totalPrice = addonsPrice + planPrice;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className={style.firstCell}>
              <p>
                {currentPlanTitle} ({paymentPeriodTitle})
              </p>
              <button onClick={()=>{stepToHandler(2)}}>Change</button>
            </td>
            <td className={style.secondCell}>{currentPlanPriceInfo}</td>
          </tr>

          {addonsIds.map((addonId) => (
            <SummaryTableAddonRow
              key={addonId}
              addonId={addonId}
              isMonthlyPrice={isMonthlyPrice}
              addonsData={addonsData}
            />
          ))}

          <tr>
            <td className={style.firstCell}>
              Total (per {isMonthlyPrice ? "month" : "year"})
            </td>
            <td className={style.secondCell}>
              ${totalPrice}/{isMonthlyPrice ? "mo" : "yr"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

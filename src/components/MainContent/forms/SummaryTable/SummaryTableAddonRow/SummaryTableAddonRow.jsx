import style from "./SummaryTableAddonRow.module.css";

export default function SummaryTableAddonRow({ addonId, isMonthlyPrice, addonsData }) {
  const currentAddon = addonsData.find((addon) => addon.id === addonId);
  const priceInfo = isMonthlyPrice ? `+$${currentAddon.monthPrice}/mo` : `+$${currentAddon.yearPrice}/yr`;
  return (
    <tr>
      <td className={style.firstCell}>{currentAddon.title}</td>
      <td className={style.secondCell}>{priceInfo}</td>
    </tr>
  );
}

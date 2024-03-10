import AddonItem from "./AddonItem/AddonItem";
// import styles from "./AddonSelection.module.css"
import addonsData from "/src/data/addonsData";
export default function AddonSelection({ formData, handleChangeFormData }) {
  const addonsIds = formData.addonsIds;
  return (
    <div className="addonList">
      {addonsData.map((addonItem) => (
        <AddonItem
          key={addonItem.id}
          addonsIds={addonsIds}
          addon={addonItem}
          handleChangeFormData={handleChangeFormData}
          isMonthlyPrice={formData.isMonthlyPrice}
        />
      ))}
    </div>
  );
}

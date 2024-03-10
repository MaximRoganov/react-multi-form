import styles from "./AddonItem.module.css";

export default function AddonItem({
  addon,
  addonsIds,
  isMonthlyPrice,
  handleChangeFormData,
}) {
  const isChecked = addonsIds.includes(addon.id);

  const onChangeHandler = (id) => {
    const newAddonsIds = isChecked
      ? addonsIds.filter((addonId) => addonId !== id)
      : [...addonsIds, id];
    handleChangeFormData("addonsIds", newAddonsIds);
  };
  return (
    <div className={styles.addon}>
      <div className="checkboxWrapper">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onChangeHandler(addon.id)}
        />
      </div>
      <div className="addonContent">
        <p className="title">{addon.title}</p>
        <p className="description">{addon.description}</p>
      </div>
      {isMonthlyPrice ? (
        <div className="addonPrice">+${addon.monthPrice}/mo</div>
      ) : (
        <div className="addonPrice">+${addon.yearPrice}/yr</div>
      )}
    </div>
  );
}

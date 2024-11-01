import { useContext } from 'react';
import AddonItem from './AddonItem/AddonItem';
// import styles from "./AddonSelection.module.css"
import addonsData from '/src/data/addonsData';
import { FormDataContext } from '../../../../Context';

export default function AddonSelection() {
  const { formData, handleChangeFormData } = useContext(FormDataContext);
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

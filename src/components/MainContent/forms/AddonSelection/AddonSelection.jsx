import styles from "./AddonSelection.module.css"

export default function AddonSelection(){
  return (
    <div className="addonList">
      <div className={styles.addon}>
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="addonContent">
            <p className="title">Online service</p>
            <p className="description">Access to multiplayer games</p>
          </div>
          <div className="addonPrice">
            +$1/mo
          </div>
      </div>
      <div className={styles.addon}>
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="addonContent">
            <p className="title">Larger storage</p>
            <p className="description">Extra 1TB of cloud save</p>
          </div>
          <div className="addonPrice">
            +$2/mo
          </div>
      </div>
      <div className={styles.addon}>
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="addonContent">
            <p className="title">Customizable profile</p>
            <p className="description">Custom theme on your profile</p>
          </div>
          <div className="addonPrice">
            +$2/mo
          </div>
      </div>
    </div>
  );
}
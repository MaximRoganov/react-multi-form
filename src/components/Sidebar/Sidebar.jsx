import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
  <div className={styles.sidebar}>
    <div className={styles.steps_block}>
      <div className={"steps_block_counter"}>1</div>
      <div>
        <div className={"steps_block_title"}>step 1</div>
        <div className={"steps_block_description"}>YOUR INFO</div>
      </div>
    </div>
    <div className={styles.steps_block}>
      <div className={"steps_block_counter"}>2</div>
      <div>
        <div className={"steps_block_title"}>step 2</div>
        <div className={"steps_block_description"}>SELECT PLAN</div>
      </div>
    </div>
    <div className={styles.steps_block}>
      <div className={"steps_block_counter"}>3</div>
      <div>
        <div className={"steps_block_title"}>step 3</div>
        <div className={"steps_block_description"}>ADD-ONS</div>
      </div>
    </div>
    <div className={styles.steps_block}>
      <div className={"steps_block_counter"}>4</div>
      <div>
        <div className={"steps_block_title"}>step 4</div>
        <div className={"steps_block_description"}>SUMMARY</div>
      </div>
    </div>
  </div>
  );
}
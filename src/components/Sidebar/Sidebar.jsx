import styles from "./Sidebar.module.css";
import StepsBlock from "./StepsBlock/StepsBlock";

export default function Sidebar({activeStep, stepsListData}) {


  return (
  <div className={styles.sidebar}>
  {stepsListData.map(({title}, index) => <StepsBlock key={title} isActive={index + 1 === activeStep } stepNumber={index + 1} description={title}/>)}
  </div>
  );
}
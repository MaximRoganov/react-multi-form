import styles from "./StepsBlock.module.css"

export default function StepsBlock({isActive, stepNumber, description}){
  const activeStyle = [styles.stepsBlock,styles.stepsBlockActive].join(' ');
  const inactiveStyle = styles.stepsBlock;


  return (
    <div className={isActive ? activeStyle : inactiveStyle}>
      <div className={"stepsBlock_counter"}>{stepNumber}</div>
      <div>
        <div className={"stepsBlock_title"}>step {stepNumber}</div>
        <div className={"stepsBlock_description"}>{description}</div>
      </div>
    </div>
  );
}
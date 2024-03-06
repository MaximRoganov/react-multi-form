export default function Navigation({activeStep,stepsNumber,stepForwardHandler,stepBackHandler}){
  const isStepFirst = activeStep === 1;
  const isStepLast = activeStep === stepsNumber;

  return (
    <>
      {!isStepFirst && <button onClick={stepBackHandler} className={"main_info_next_button"}>Go Back</button>}
      <button onClick={stepForwardHandler} className={"main_info_next_button"}>{isStepLast ? 'Confirm' : 'Next Step'}</button>
    </>
  );
}
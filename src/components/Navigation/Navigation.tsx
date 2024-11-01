import { NavigationProps } from './../../types';

export default function Navigation({
  activeStep,
  stepsNumber,
  stepForwardHandler,
  stepBackHandler,
  setConfirmedHandler,
}: NavigationProps) {
  const isStepFirst = activeStep === 1;
  const isStepLast = activeStep === stepsNumber;

  return (
    <>
      {!isStepFirst && (
        <button onClick={stepBackHandler} className={'main_info_next_button'}>
          Go Back
        </button>
      )}
      <button
        onClick={isStepLast ? setConfirmedHandler : stepForwardHandler}
        className={'main_info_next_button'}
      >
        {isStepLast ? 'Confirm' : 'Next Step'}
      </button>
    </>
  );
}

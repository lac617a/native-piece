import {
  useMemo,
  useState,
  Dispatch,
  useCallback,
  SetStateAction,
} from "react";

interface Helpers {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
}

type setStepCallbackType = (step: number | ((step: number) => number)) => void;

/**
 * A simple abstraction to play with a stepper, don't repeat yourself.
 * 
 * Usage:
 * ```tsx
 * const [currentStep, helpers] = useStep(5)

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
    setStep,
  } = helpers

  return (
    <>
      <p>Current step is {currentStep}</p>
      <p>Can go to previous step {canGoToPrevStep ? 'yes' : 'no'}</p>
      <p>Can go to next step {canGoToNextStep ? 'yes' : 'no'}</p>
      <button onClick={goToNextStep}>Go to next step</button>
      <button onClick={goToPrevStep}>Go to previous step</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setStep(3)}>Set to step 3</button>
    </>
  )
 * ```
 * @param maxStep 
 * @returns {Object} [number, Helpers]
 */
function useStep(maxStep: number): [number, Helpers] {
  const [currentStep, setCurrentStep] = useState(1);

  const canGoToNextStep = useMemo(
    () => currentStep + 1 <= maxStep,
    [currentStep, maxStep]
  );

  const canGoToPrevStep = useMemo(() => currentStep - 1 >= 1, [currentStep]);

  const setStep = useCallback<setStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error("Step not valid");
    },
    [maxStep, currentStep]
  );

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoToNextStep]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoToPrevStep]);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}

export default useStep;

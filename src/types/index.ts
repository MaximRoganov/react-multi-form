export interface FormData {
  userName: string;
  email: string;
  phone: string;
  planId: number;
  isMonthlyPrice: boolean;
  addonsIds: number[];
}

export type mixedArrayType = string | number;

export interface NavigationProps {
  activeStep: number;
  stepsNumber: number;
  stepForwardHandler: () => void;
  stepBackHandler: () => void;
  setConfirmedHandler: () => void;
}

export interface HeaderProps {
  activeStep: any;
  stepsListData: any;
}

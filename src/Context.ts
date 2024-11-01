import { createContext } from 'react';
import { FormData, mixedArrayType } from './types';

interface FormDataContextInterface {
  formData: FormData;
  handleChangeFormData: (
    key: string,
    value: string | number | boolean | mixedArrayType[],
  ) => void;
}

export const FormDataContext = createContext<FormDataContextInterface | null>(
  null,
);

import { useState } from 'react';
import { useIban } from './useIban';
import { getIbanValidationViewModel } from './ValidationViewModelService';

/** Hook for orchestrating IBAN validation
 * Orchestrator Layer
 * */
export const useIbanValidation = () => {
    const [formValues, setFormValues] = useState({ iban: '' });
    const [iban, setIban] = useState(formValues.iban);
    const { data, error } = useIban(iban);
    const {
        isValidationAvailable,
        errorMessage,
        data: validationResults,
    } = getIbanValidationViewModel(data, error);

    const onIbanValidationSubmit = (event: React.FormEvent) => {
        const ibanWithoutFormatting = formValues.iban.replaceAll(' ', '');
        setIban(ibanWithoutFormatting);
        event.preventDefault();
    };

    const onIbanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ iban: event.target.value });
    };

    return {
        onIbanValidationSubmit,
        onIbanChange,
        validationError: errorMessage,
        isValidationAvailable,
        validationResults,
    };
};

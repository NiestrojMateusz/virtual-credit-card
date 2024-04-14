import type { ValidationResponse } from '../../api/ValidationApiService';

export type ValidationIbanViewModel = {
    isValidationAvailable?: boolean;
    data: string[];
};

export const getIbanValidationViewModel = (
    validation: ValidationResponse | undefined,
): ValidationIbanViewModel => {
    if (!validation) {
        return { isValidationAvailable: false, data: [] };
    }

    if (validation.bank?.trustScore && validation.bank?.trustScore > 7) {
        return { isValidationAvailable: true, data: ['Trusted bank'] };
    }

    return { isValidationAvailable: true, data: ['Valid IBAN'] };
};

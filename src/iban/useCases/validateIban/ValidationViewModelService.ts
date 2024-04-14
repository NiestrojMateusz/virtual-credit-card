import type { ValidationResponse } from '../../api/ValidationApiService';

export type ValidationIbanViewModel = {
    isValidationAvailable?: boolean;
};

export const getIbanValidationViewModel = (
    validation: ValidationResponse | undefined,
): ValidationIbanViewModel => {
    if (!validation) {
        return { isValidationAvailable: false };
    }

    if (validation.flags.length) {
        return { isValidationAvailable: true };
    }

    return {};
};

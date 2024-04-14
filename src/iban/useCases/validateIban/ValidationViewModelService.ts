import type { ValidationResponse } from '../../api/ValidationApiService';

export type ValidationIbanViewModel = {
    isValidationAvailable?: boolean;
    data: string[];
};

const hasTrustedBank = (validation: ValidationResponse) => {
    return validation.bank?.trustScore && validation.bank?.trustScore > 7;
};

export const getIbanValidationViewModel = (
    validation: ValidationResponse | undefined,
): ValidationIbanViewModel => {
    if (!validation) {
        return { isValidationAvailable: false, data: [] };
    }

    const data = ['Valid IBAN'];

    if (hasTrustedBank(validation)) {
        data.push('Trusted bank');
    }

    if (validation.flags.includes('INSTANT')) {
        data.push('Accepts instant payments');
    }

    return { isValidationAvailable: true, data };
};

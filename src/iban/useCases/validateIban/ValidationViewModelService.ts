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

    if (validation.flags.includes('POSITIVE_HISTORY')) {
        data.push('Positive operation history');
    }

    if (!validation.flags.includes('SECURITY_CLAIMS')) {
        data.push('No security claims');
    }

    return { isValidationAvailable: true, data };
};

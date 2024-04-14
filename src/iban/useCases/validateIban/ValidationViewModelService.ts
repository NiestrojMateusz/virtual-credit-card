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
    const { flags } = validation;

    if (hasTrustedBank(validation)) {
        data.push('Trusted bank');
    }

    if (flags.includes('INSTANT')) {
        data.push('Accepts instant payments');
    }

    if (flags.includes('POSITIVE_HISTORY')) {
        data.push('Positive operation history');
    }

    if (!flags.includes('SECURITY_CLAIMS')) {
        data.push('No security claims');
    }

    if (flags.includes('PSD2')) {
        data.push('Complies with Payment Services Directive (PSD2)');
    }

    return { isValidationAvailable: true, data };
};

import { describe, expect, it } from 'vitest';
import { getIbanValidationViewModel } from '../ValidationViewModelService';
import type { ValidationResponse } from '../../../api/ValidationApiService';

const VALID_IBAN_STUB = 'AT0309000000000019176655';

describe('validation view model retrieval', () => {
    describe('validated data availability', () => {
        it('return availability when validation data unavailable', () => {
            const ibanValidationDTOStub = undefined;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.isValidationAvailable).toBeFalsy();
        });

        it('return availability when validation data available', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: ['INSTANT'],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.isValidationAvailable).toBeTruthy();
        });
    });

    describe('validation results', () => {
        it('return empty when validation is unavailable', () => {
            const ibanValidationDTOStub = undefined;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toStrictEqual([]);
        });

        it('return results when validation is available', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: [],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain('Valid IBAN');
        });

        it('return results when iban belongs to trusted bank', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: [],
                bank: {
                    trustScore: 8,
                },
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain('Trusted bank');
        });

        it('return results when iban allows to instant payments', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: ['INSTANT'],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain('Accepts instant payments');
        });

        it('return results when iban has positive operation history', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: ['POSITIVE_HISTORY'],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain('Positive operation history');
        });

        it('return results when no security claims', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: [],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain('No security claims');
        });

        it('return results when iban complied with PSD2', () => {
            const ibanValidationDTOStub = {
                iban: VALID_IBAN_STUB,
                flags: ['PSD2'],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.data).toContain(
                'Complies with Payment Services Directive (PSD2)',
            );
        });
    });

    describe('validation error', () => {
        it('returns error message when iban is invalid', () => {
            const ibanValidationDTOStub = {
                iban: 'invalid input',
                flags: [],
            } satisfies ValidationResponse;

            const error = new Error();

            const result = getIbanValidationViewModel(ibanValidationDTOStub, error);

            expect(result.errorMessage).toBe('The IBAN is invalid');
        });
    });
});

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

            expect(result.data).toEqual(['Valid IBAN']);
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
    });
});

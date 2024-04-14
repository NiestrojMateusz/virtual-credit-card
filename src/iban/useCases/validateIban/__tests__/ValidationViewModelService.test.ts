import { describe, expect, it } from 'vitest';
import { getIbanValidationViewModel } from '../ValidationViewModelService';
import type { ValidationResponse } from '../../../api/ValidationApiService';

describe('validation view model retrieval', () => {
    describe('validated data availability', () => {
        it('return availability when validation data unavailable', () => {
            const ibanValidationDTOStub = undefined;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.isValidationAvailable).toBeFalsy();
        });

        it('return availability when validation data available', () => {
            const ibanValidationDTOStub = {
                iban: 'AT0309000000000019176655',
                flags: ['INSTANT'],
            } satisfies ValidationResponse;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.isValidationAvailable).toBeTruthy();
        });
    });
});

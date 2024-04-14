import { describe, expect, it } from 'vitest';
import { getIbanValidationViewModel } from '../ValidationViewModelService';

describe('validation view model retrieval', () => {
    describe('validated data availability', () => {
        it('return availability when validation data unavailable', () => {
            const ibanValidationDTOStub = undefined;

            const result = getIbanValidationViewModel(ibanValidationDTOStub);

            expect(result.isValidationAvailable).toBeFalsy();
        });
    });
});

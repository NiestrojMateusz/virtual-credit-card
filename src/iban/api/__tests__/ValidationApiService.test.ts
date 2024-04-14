import { describe, expect, it, vi } from 'vitest';
import { createIbanValidationApiAdapter } from '../ValidationApiService';

describe('Api adapter factory', () => {
    it('returns successful response for provided iban', async () => {
        const ibanStub = 'AT0309000000000019176655';
        const spy = vi.fn().mockResolvedValue({
            ok: true,
            json: () => ({
                iban: 'AT0309000000000019176655',
                flags: ['INSTANT', 'POSITIVE_HISTORY', 'SECURITY_CLAIMS', 'PSD2'],
                bank: {
                    trustScore: 10,
                },
            }),
        });
        const validateIban = createIbanValidationApiAdapter(ibanStub, { request: spy });
        const result = await validateIban();

        expect(result).toStrictEqual({
            iban: 'AT0309000000000019176655',
            flags: ['INSTANT', 'POSITIVE_HISTORY', 'SECURITY_CLAIMS', 'PSD2'],
            bank: {
                trustScore: 10,
            },
        });
    });
});

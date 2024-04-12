import { describe, it, expect } from 'vitest';
import type { CreditCard } from 'visa-client';
import { createVirtualCardModel } from '../VirtualCardPageService';

describe('Virtual Card Page Service', () => {
    describe('create card view model', () => {
        it('returns model when card is unavailable', () => {
            const result = createVirtualCardModel();

            expect(result).toStrictEqual({
                card: undefined,
            });
        });
        it('returns card view model', async () => {
            const card: CreditCard = {
                id: 1234567890111213,
                holder: 'Matt NJ',
                expiry: new Date('2025-05-21T15:27:03.885Z'),
                cvc: 123,
                color: 'blue',
            };

            const result = createVirtualCardModel(card);

            expect(result).toStrictEqual({
                card: {
                    name: 'Matt NJ',
                    number: '1234 5678 9011 1213',
                    valid: '05/25',
                    code: '123',
                    color: 'blue',
                },
            });
        });
    });
});

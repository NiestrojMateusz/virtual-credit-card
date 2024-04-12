import { describe, it, expect } from 'vitest';
import type { CreditCard } from 'visa-client';
import { createVirtualCardAdapter } from '../VirtualCardAdapter';

describe('VirtualCardAdapter', () => {
    it('returns card', async () => {
        const card: CreditCard = {
            id: 1234567890111213,
            holder: 'Nik Sumeiko',
            expiry: new Date('2025-05-21T15:27:03.885Z'),
            cvc: 123,
            color: 'red',
        };

        const fake = () => Promise.resolve(card);

        const createCard = createVirtualCardAdapter({ create: fake });

        const result = await createCard();

        expect(result).toBe(card);
    });
});

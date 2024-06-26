import { describe, expect, it } from 'vitest';
import { formatIban } from '../formatIban';

describe('iban helpers', () => {
    it('should split iban to group of 4 characters', () => {
        const iban = 'AT0309000000000019176655';

        const result = formatIban(iban);

        expect(result).toBe('AT03 0900 0000 0000 1917 6655');
    });
});

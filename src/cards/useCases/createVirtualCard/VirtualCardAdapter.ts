import type { CreditCard } from 'visa-client';
import { createVirtualCreditCard } from 'visa-client';

export const createVirtualCardAdapter = (options?: {
    create: () => Promise<CreditCard>;
}) => {
    const create = options?.create ?? createVirtualCreditCard;

    return () => create();
};

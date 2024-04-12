import type { CreditCard } from 'visa-client';
import { useState } from 'react';
import { createVirtualCardAdapter } from './VirtualCardAdapter';
import { createVirtualCardModel } from './VirtualCardPageService';

/* Orchestrator hook to provide model for the view */
export const useCreateVirtualCard = () => {
    const [card, setCard] = useState<CreditCard>();

    const createCard = async () => {
        const createVirtualCreditCard = createVirtualCardAdapter();
        const virtualCard: CreditCard = await createVirtualCreditCard();

        setCard(virtualCard);
    };
    return {
        ...createVirtualCardModel(card),
        createCard,
    };
};

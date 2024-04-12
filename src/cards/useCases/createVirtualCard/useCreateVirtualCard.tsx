import type { CreditCard } from 'visa-client';
import { useState } from 'react';
import { createVirtualCardModel } from './VirtualCardPageService';
import { useVirtualCardAdapterFactory } from './VirtualCardProvider';

/* Orchestrator hook to provide model for the view */
export const useCreateVirtualCard = () => {
    const [card, setCard] = useState<CreditCard>();
    const virtualCardFactory = useVirtualCardAdapterFactory();
    const createVirtualCreditCard = virtualCardFactory();

    const createCard = async () => {
        const virtualCard = await createVirtualCreditCard();

        setCard(virtualCard);
    };
    return {
        ...createVirtualCardModel(card),
        createCard,
    };
};

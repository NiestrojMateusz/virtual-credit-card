import type { CreditCard } from 'visa-client';

type CardModelResult = {
    card?: {
        name: string;
        number: string;
        valid: string;
        code: string;
        color?: string;
    };
};
export const createVirtualCardModel = (card?: CreditCard): CardModelResult => {
    if (!card) {
        return {
            card,
        };
    }
    const number = formatId(card.id);
    const valid = formatDate(card.expiry);

    return {
        card: {
            name: card?.holder,
            number,
            valid,
            code: card?.cvc.toString(),
            color: card?.color,
        },
    };
};

function formatId(id: number) {
    return id.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
}

function formatDate(date: Date): string {
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    return `${month}/${year}`;
}

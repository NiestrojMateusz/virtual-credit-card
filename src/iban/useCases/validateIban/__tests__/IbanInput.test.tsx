import { ValidateIbanPage } from '../ValidateIbanPage';

describe('iban validation input', () => {
    it('see input value formatting', () => {
        cy.intercept('GET', '**/validate?**', {
            statusCode: 200,
            ok: true,
            body: {
                iban: 'AT0309000000000019176655',
                flags: ['INSTANT', 'POSITIVE_HISTORY', 'SECURITY_CLAIMS', 'PSD2'],
                bank: {
                    trustScore: 10,
                },
            },
        });
        cy.mount(<ValidateIbanPage />, '/');

        cy.get('form [data-test="iban-entry"]').type('AT0309000000000019176655');
        cy.get('form [data-test="iban-entry"]').should(
            'have.value',
            'AT03 0900 0000 0000 1917 6655',
        );
    });
});

import { ValidateIbanPage } from '../ValidateIbanPage';

describe('iban validation', () => {
    it('see error when iban is invalid', () => {
        cy.intercept('GET', '**/validate?iban=LV64HABA0551018676991*', {
            statusCode: 400,
        });
        cy.mount(<ValidateIbanPage />, '/');

        cy.get('form [data-test="iban-entry"]').type('LV64HABA0551018676991');
        cy.get('form button[type="submit"]').click();

        cy.contains('This IBAN is invalid').should('be.visible');
    });
});

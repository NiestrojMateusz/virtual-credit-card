import { VirtualCardPage } from '../VirtualCardPage';

describe('CreateVirtualCard', () => {
    it('create virtual card and see its details', () => {
        cy.mount(<VirtualCardPage />, '/');

        cy.get('[data-test="create-card"]').click();

        cy.get('[data-test="virtual-card"]').contains('Matt').should('be.visible');
        cy.get('[data-test="virtual-card"]').contains('1234').should('be.visible');
        cy.get('[data-test="information"]').should('be.visible');
    });
});

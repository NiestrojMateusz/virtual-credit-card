import { VirtualCardPage } from '../VirtualCardPage';
import { ContextProvider } from '../../../../common/context';
import { provideVirtualCard } from '../VirtualCardProvider';

describe('CreateVirtualCard', () => {
    it('create virtual card and see its details', () => {
        const fakeAdapter = () =>
            Promise.resolve({
                id: 1234567890111213,
                holder: 'Matt NJ',
                expiry: new Date('2025-05-21T15:27:03.885Z'),
                cvc: 123,
                color: 'red',
            });

        cy.mount(
            <ContextProvider providers={[provideVirtualCard(() => fakeAdapter)]}>
                <VirtualCardPage />
            </ContextProvider>,
            '/',
        );

        cy.get('[data-test="create-card"]').click();

        cy.get('[data-test="virtual-card"]').contains('Matt').should('be.visible');
        cy.get('[data-test="virtual-card"]').contains('1234').should('be.visible');
        cy.get('[data-test="information"]').should('be.visible');
    });
});

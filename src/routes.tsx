import { FocusPageLayout, HeroTitle } from './design-system';
import { LandingPage } from './landing/useCases/LandingPage';
import { VirtualCardPage } from './cards/useCases/createVirtualCard/VirtualCardPage';
import { ContextProvider } from './common/context';
import { provideVirtualCard } from './cards/useCases/createVirtualCard/VirtualCardProvider';
import { createVirtualCardAdapter } from './cards/useCases/createVirtualCard/VirtualCardAdapter';
import { ValidateIbanPage } from './iban/useCases/validateIban/ValidateIbanPage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/virtual-card',
        element: (
            <ContextProvider providers={[provideVirtualCard(createVirtualCardAdapter)]}>
                <VirtualCardPage />
            </ContextProvider>
        ),
    },
    {
        path: '/iban-validation',
        element: <ValidateIbanPage />,
    },
    {
        path: '/wip',
        element: (
            <FocusPageLayout>
                <HeroTitle title="/WIP" disabled />
                <p>To be implemented</p>
            </FocusPageLayout>
        ),
    },
];

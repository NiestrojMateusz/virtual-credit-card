import {
    Alert,
    Button,
    Card,
    FocusPageLayout,
    HeroTitle,
    PageContents,
} from '@design-system';
import { useCreateVirtualCard } from './useCreateVirtualCard';

export const VirtualCardPage = () => {
    const { createCard, card } = useCreateVirtualCard();
    return (
        <FocusPageLayout>
            <HeroTitle title="/Virtual card" />
            <PageContents>
                <Button data-test="create-card" onClick={createCard}>
                    Create new card
                </Button>
                {card && (
                    <>
                        <Card data-test="virtual-card" card={card} />
                        <Alert data-test="information" variant="info" title="Important">
                            Virtual card is for a single use only (e.g., for secure online
                            shopping). It is automatically destroyed after successful
                            purchase.
                        </Alert>
                    </>
                )}
            </PageContents>
        </FocusPageLayout>
    );
};

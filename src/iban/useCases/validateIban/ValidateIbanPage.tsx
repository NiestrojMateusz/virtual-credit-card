import {
    Button,
    FocusPageLayout,
    FormField,
    HeroTitle,
    PositiveList,
    TextInput,
} from '@design-system';
import { MagnifyingGlassIcon } from '../../../design-system/components/icons';

export const ValidateIbanPage = () => {
    return (
        <FocusPageLayout>
            <HeroTitle title="IBAN Validator" />
            <form>
                <FormField
                    button={
                        <Button type="submit">
                            <MagnifyingGlassIcon />
                        </Button>
                    }
                >
                    <TextInput data-test="iban-entry" placeholder="Type IBAN..." />
                </FormField>
            </form>
            <PositiveList items={['x', 'y', 'z']} />
        </FocusPageLayout>
    );
};

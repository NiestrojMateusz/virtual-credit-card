import {
    Button,
    FocusPageLayout,
    FormField,
    HeroTitle,
    PositiveList,
    TextInput,
} from '@design-system';
import { MagnifyingGlassIcon } from '../../../design-system/components/icons';
import { useIbanValidation } from './useIbanValidation';

export const ValidateIbanPage = () => {
    const {
        onIbanValidationSubmit,
        onIbanChange,
        validationError,
        isValidationAvailable,
        validationResults,
    } = useIbanValidation();

    return (
        <FocusPageLayout>
            <HeroTitle title="IBAN Validator" />
            <form onSubmit={onIbanValidationSubmit}>
                <FormField
                    error={validationError}
                    button={
                        <Button type="submit">
                            <MagnifyingGlassIcon />
                        </Button>
                    }
                >
                    <TextInput
                        data-test="iban-entry"
                        placeholder="Type IBAN..."
                        onChange={onIbanChange}
                    />
                </FormField>
            </form>
            {isValidationAvailable && <PositiveList items={validationResults} />}
        </FocusPageLayout>
    );
};

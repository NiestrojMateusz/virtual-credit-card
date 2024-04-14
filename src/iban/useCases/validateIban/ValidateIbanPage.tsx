import { FocusPageLayout, HeroTitle, PositiveList } from '@design-system';
import { useIbanValidation } from './useIbanValidation';
import { IbanInputField } from './IbanInputField';

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
                <IbanInputField error={validationError} onChange={onIbanChange} />
            </form>
            {isValidationAvailable && <PositiveList items={validationResults} />}
        </FocusPageLayout>
    );
};

import {
    Button,
    FocusPageLayout,
    FormField,
    HeroTitle,
    PositiveList,
    TextInput,
} from '@design-system';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MagnifyingGlassIcon } from '../../../design-system/components/icons';
import { createIbanValidationApiAdapter } from '../../api/ValidationApiService';
import { getIbanValidationViewModel } from './ValidationViewModelService';

export const ValidateIbanPage = () => {
    const [formValues, setFormValues] = useState({ iban: '' });
    const [iban, setIban] = useState(formValues.iban);
    const { data } = useQuery({
        queryKey: ['validation', iban],
        queryFn: createIbanValidationApiAdapter(iban),
        enabled: Boolean(iban),
        retry: false,
    });

    const ibanValidationModel = getIbanValidationViewModel(data);

    return (
        <FocusPageLayout>
            <HeroTitle title="IBAN Validator" />
            <form
                onSubmit={(event) => {
                    setIban(formValues.iban);
                    event.preventDefault();
                }}
            >
                <FormField
                    button={
                        <Button type="submit">
                            <MagnifyingGlassIcon />
                        </Button>
                    }
                >
                    <TextInput
                        data-test="iban-entry"
                        placeholder="Type IBAN..."
                        onChange={(event) => setFormValues({ iban: event.target.value })}
                    />
                </FormField>
            </form>
            {ibanValidationModel.isValidationAvailable && (
                <PositiveList items={ibanValidationModel.data} />
            )}
        </FocusPageLayout>
    );
};

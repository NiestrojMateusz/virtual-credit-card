import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, FormField, TextInput } from '@design-system';
import { MagnifyingGlassIcon } from '../../../design-system/components/icons';
import { formatIban } from '../../helpers/formatIban';

type Props = {
    error?: string;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export const IbanInputField = ({ error, onChange }: Props) => {
    const [iban, setIban] = useState('');

    return (
        <FormField
            error={error}
            button={
                <Button type="submit">
                    <MagnifyingGlassIcon />
                </Button>
            }
        >
            <TextInput
                data-test="iban-entry"
                placeholder="Type IBAN…"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setIban(formatIban(event.target.value));
                    onChange(event);
                }}
                value={iban}
            />
        </FormField>
    );
};

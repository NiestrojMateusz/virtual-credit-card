import { useQuery } from '@tanstack/react-query';
import { createIbanValidationApiAdapter } from '../../api/ValidationApiService';

/**
 * Repository for handle state management
 * */
export const useIban = (iban: string) => {
    return useQuery({
        queryKey: ['validation', iban],
        queryFn: createIbanValidationApiAdapter(iban),
        enabled: Boolean(iban),
        retry: false,
    });
};

type Flag = 'INSTANT' | 'POSITIVE_HISTORY' | 'SECURITY_CLAIMS' | 'PSD2';

type ValidationResponse = {
    iban: string;
    flags: Flag[];
    bank?: {
        trustScore: number;
    };
};

type AdapterOptions = {
    request?: typeof fetch;
};

export const createIbanValidationApiAdapter = (
    iban: string,
    { request = fetch }: AdapterOptions = {},
) => {
    return async (): Promise<ValidationResponse> => {
        const response = await request(`http://localhost:9000/validate?iban=${iban}`, {
            headers: {
                Content_Type: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    };
};

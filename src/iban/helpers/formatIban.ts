export const formatIban = (iban: string) => {
    return iban
        .replace(/\s+/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
};

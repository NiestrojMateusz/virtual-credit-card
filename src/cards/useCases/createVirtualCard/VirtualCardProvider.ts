import { createGenericContext } from '../../../common/context';

type VirtualCard = {
    id: number;
    holder: string;
    expiry: Date;
    cvc: number;
    color: string;
};

type Adapter = () => Promise<VirtualCard>;

type Factory = () => Adapter;

export const { useContext, createContextProvider: provideVirtualCard } =
    createGenericContext<Factory>();

export function useVirtualCardAdapterFactory(): Factory {
    return useContext().value;
}

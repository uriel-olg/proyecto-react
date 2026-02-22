import { createContext, useState, useEffect, type ReactNode } from "react";
import { getData } from "../peticiones";

export interface Crypto {
    id: string;
    name: string;
    rank: number;
    symbol: string;
    priceUsd: number;
    changePercent24Hr: number;
    marketCapUsd: string;
    volumeUsd24Hr: number;
    supply: string;
    vwap24Hr: string;
}

interface CryptoContextType {
    crypto: Crypto[];
}

export const CryptoContext = createContext<CryptoContextType>({
    crypto: [],
});

export const CryptoProvider = ({ children } : {children:ReactNode}) => {
    const [crypto, setCrypto] = useState<Crypto[]>([]);


    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getData();
            console.log("API:", data);
            
            setCrypto(data.data); // asegurate que tu API tiene "data"
        } catch (error) {
            console.log(error);
        }
        };

        fetchData();
    }, []);

    return (
        <CryptoContext.Provider value={{crypto}}>
        {children}
        </CryptoContext.Provider>
    );
};

import { createContext, useState } from "react";

export const ApiContext: any = createContext({});

const defaultValue: object = {
    APIdata: {
        apiUrl: "",
        selectedInterface: "",
        statusExpected: "",
        data: [],
        error: ""
    },
    actualConfig: {
        apiUrl: "None",
        selectedCategory: "None",
        statusExpected: "200"
    }
}

export function ApiProvider({ children }: any): JSX.Element {

    const [context, setContext] = useState(defaultValue);

    return (
        <ApiContext.Provider value={{context, setContext}}>
            {children}
        </ApiContext.Provider>
    )
}

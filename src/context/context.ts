import { createContext } from "react";

// create a context for the global state
export const ctx = createContext({
    state: {
        APIdata: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isLoggedIn: false,
            isAdmin: false,
            isLoading: false,
            error: "",
            success: "",
            token: "",
            id: ""
        },
        actualConfig: {
            
        }
    }
})




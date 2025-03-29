import { createRoot } from "react-dom/client";
//import  Provider  from "@/components/ui/provider.jsx"
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { LoginLogoutProvider } from "./ContextAPI/LoginLogoutContext.jsx";

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <BrowserRouter>
            <LoginLogoutProvider>
                <App />
            </LoginLogoutProvider>
        </BrowserRouter>
    </ChakraProvider>
)

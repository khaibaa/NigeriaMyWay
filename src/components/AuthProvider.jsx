/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import supabase from '@/config/supabaseClient'; // Assuming you have a supabaseClient file

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setIsLoading(true);
            if (event === 'SIGNED_IN') {
                setUser(session.user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
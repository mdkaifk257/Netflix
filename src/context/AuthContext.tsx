import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    type User
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

interface AuthContextType {
    user: User | null;
    signUp: (email: string, password: string, username: string, mobile: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const isMock = auth.app.options.apiKey === "YOUR_API_KEY_HERE";

    async function signUp(email: string, password: string, username: string, mobile: string) {
        if (isMock) {
            const mockUser = {
                uid: 'mock-' + Date.now(),
                email: email,
                emailVerified: true,
                isAnonymous: false,
                metadata: {},
                providerData: [],
                refreshToken: '',
                tenantId: null,
                delete: async () => { },
                getIdToken: async () => '',
                getIdTokenResult: async () => ({} as any),
                reload: async () => { },
                toJSON: () => ({}),
                displayName: null,
                phoneNumber: null,
                photoURL: null,
                providerId: 'mock'
            } as unknown as User;

            setUser(mockUser);
            localStorage.setItem('netflix_user', JSON.stringify(mockUser));
            // Initialize mock DB for user
            const existingDb = JSON.parse(localStorage.getItem('netflix_db') || '{}');
            existingDb[email] = [];
            localStorage.setItem('netflix_db', JSON.stringify(existingDb));
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Initialize 'savedShows' collection for the new user
            await setDoc(doc(db, 'users', email), {
                savedShows: [],
                username: username,
                mobile: mobile
            });
        } catch (error) {
            console.error("Error signing up:", error);
            throw error;
        }
    }

    function logIn(email: string, password: string) {
        if (isMock) {
            return new Promise<void>((resolve, reject) => {
                // Simple mock login - accept any password for demo
                if (email) {
                    const mockUser = {
                        uid: 'mock-' + Date.now(),
                        email: email,
                        emailVerified: true,
                        isAnonymous: false,
                        metadata: {},
                        providerData: [],
                        refreshToken: '',
                        tenantId: null,
                        delete: async () => { },
                        getIdToken: async () => '',
                        getIdTokenResult: async () => ({} as any),
                        reload: async () => { },
                        toJSON: () => ({}),
                        displayName: null,
                        phoneNumber: null,
                        photoURL: null,
                        providerId: 'mock'
                    } as unknown as User;
                    setUser(mockUser);
                    localStorage.setItem('netflix_user', JSON.stringify(mockUser));
                    resolve();
                } else {
                    reject('Invalid email');
                }
            });
        }

        return signInWithEmailAndPassword(auth, email, password)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then(() => { }) // Return void to match interface
            .catch((error) => {
                console.error("Error logging in:", error);
                throw error;
            });
    }

    function logOut() {
        if (isMock) {
            setUser(null);
            localStorage.removeItem('netflix_user');
            return Promise.resolve();
        }
        return signOut(auth);
    }

    useEffect(() => {
        if (isMock) {
            const storedUser = localStorage.getItem('netflix_user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } else {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => {
                unsubscribe();
            };
        }
    }, [isMock]);

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('UserAuth must be used within an AuthContextProvider');
    }
    return context;
}

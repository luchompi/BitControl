import { create } from 'zustand'

const sesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: null,
    counter: 0,
    isLoading: false,
    alterLoading: (status) => set(() => ({ isLoading: status })),
    setTokens: (data) => set(() => ({ PAT: data.PAT, RAT: data.RAT, isLogged: true })),
    updatePAT: (data) => set(() => ({ PAT: data, counter: 0 })),
    setUserData: (data) => set(() => ({ userData: data })),
    incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
    logout: () => set(() => ({ PAT: null, RAT: null, isLogged: false, counter: 0 })),
}))

export default sesionStore;
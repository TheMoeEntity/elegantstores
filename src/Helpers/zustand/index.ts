import { UserMetadata } from '@supabase/supabase-js'
import { create } from 'zustand'
import { IStore } from '../types'


export const useClientStore = create<IStore>((set) => ({
    userData: {},
    setSession: (data: UserMetadata) => {
        set({ userData: data })
    },
}))
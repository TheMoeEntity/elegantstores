import { Helpers } from '@/src/Helpers'
import { readUserSession } from '@/src/Helpers/supabase'
import { ISBProducts, wishList } from '@/src/Helpers/types'
import Dashboard from '@/src/components/Cards/Dashboard'
import React from 'react'

const Account = async () => {
    'use server'
    const user = await readUserSession()
    const email = user.data.user?.email
    const getSession = user.data.user?.user_metadata ?? null
    const uid = user.data.user?.id
    const url = await Helpers.fetchSupabaseUsers().then(x => x.avatar).catch(() => '')
    const getAddress = await Helpers.fetchSupabaseUsers().then(x => x.address).catch(() => '')
    const oldwishlist = await Helpers.fetchSupabaseUsers().then(x => x.wishlist.items).catch(() => []) as wishList[]
    const items = await Helpers.fetchSupabaseProducts() as ISBProducts[]
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <h1 className='text-center py-20 text-4xl font-semibold'>My Account</h1>
            <Dashboard items={items} url={url} uid={uid ?? null} wishlist={oldwishlist} email={email ?? ''} getAddress={getAddress} getSession={getSession} />
        </main>
    )
}

export default Account
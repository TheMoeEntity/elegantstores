import { readUserSession } from '@/src/Helpers/supabase'
import Dashboard from '@/src/components/Cards/Dashboard'
import React from 'react'

const Account = async () => {
    const user = await readUserSession()
    const getSession = user.data.user?.user_metadata ?? null
    return (
        <main className="max-w-7xl mx-auto bg-[#fafafa]">
            <h1 className='text-center py-20 text-4xl font-semibold'>My Account</h1>
            <Dashboard getSession={getSession} />
        </main>
    )
}

export default Account
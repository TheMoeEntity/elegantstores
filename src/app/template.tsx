import React, { ReactNode } from "react";
import AppLayout from "../components/AppLayout";
import { readUserSession } from "../Helpers/supabase";
import { Helpers } from "../Helpers";

const Template = async ({ children }: { children: ReactNode }) => {
    const user = await readUserSession()
    const getSession = user.data.user?.user_metadata ?? null
    const url = await Helpers.fetchSupabaseUsers().then(x => x.avatar).catch(() => '')
    return (
        <AppLayout url={url} session={getSession}>
            {children}
        </AppLayout>

    );

};

export default Template;

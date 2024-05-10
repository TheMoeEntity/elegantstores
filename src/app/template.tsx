import React, { ReactNode } from "react";
import AppLayout from "../components/AppLayout";
import { readUserSession } from "../Helpers/supabase";
import { Helpers } from "../Helpers";
import { ISBProducts } from "../Helpers/types";

const Template = async ({ children }: { children: ReactNode }) => {
    const user = await readUserSession()
    const getSession = user.data.user?.user_metadata ?? null
    const url = await Helpers.fetchSupabaseUsers().then(x => x.avatar).catch(() => '')
    const products = await Helpers.fetchSupabaseProducts() as ISBProducts[]
    return (
        <AppLayout products={products} url={url} session={getSession}>
            {children}
        </AppLayout>
    );

};

export default Template;

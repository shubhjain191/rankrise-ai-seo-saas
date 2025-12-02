import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import DashboardGuard from '@/components/DashboardGuard';

async function layout({children}: {children: React.ReactNode}) {

    const { has } = await auth();
    const user = await currentUser();

    const hasStarterPlan =  has({plan: "starter"});
    const hasProPlan =  has({plan: "pro"});

    const isPaidMember = hasStarterPlan || hasProPlan;
    const planType = hasProPlan ? "Pro" : hasStarterPlan ? "Starter" : undefined;

    return (
        <DashboardGuard 
            isPaidMember={isPaidMember} 
            userName={user?.firstName}
            planType={planType}
        >
            {children}
        </DashboardGuard>
    )
}

export default layout;
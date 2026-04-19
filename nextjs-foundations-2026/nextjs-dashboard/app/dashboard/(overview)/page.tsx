import { lusitana } from "@/app/ui/fonts"; //  "../ui/fonts" also works
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { fetchCardData/*, fetchLatestInvoices*//*, fetchRevenue*/ } from "../../lib/data";
import { Suspense } from "react";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

// Without a 'use client' directive, this is a server component by default
// ALSO NOTE THAT this Page component is async
export default async function DashboardPage() {
    // const revenue = await fetchRevenue();
    // const invoices = await fetchLatestInvoices();
    // const {
    //         numberOfCustomers, numberOfInvoices,
    //         totalPaidInvoices, totalPendingInvoices
    //     }
    //     = await fetchCardData()
    // ;


    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>

                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>

        // <p>
        //     Dashboard page
        // </p>
    );
}

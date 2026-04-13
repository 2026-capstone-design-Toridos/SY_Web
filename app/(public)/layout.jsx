'use client'
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }) {

    return (
        <>
            <Banner />
            <Navbar />
            {children}
            <Footer />
            <Script
                src="/ghosttracker.iife.js"
                data-endpoint="https://toridos.vercel.app/api/logs/event"
                strategy="afterInteractive"
            />
        </>
    );
}

"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
// import AppBar from '@/components/blocks/AppBar';
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  
if (!publishableKey) {
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
}
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {pathname.startsWith("/dashboard") ? null : <HeroHeader />}
        {children}
        <Toaster />
        {pathname.startsWith("/dashboard") ? null : <FooterSection />}
      </NextThemesProvider>
    </ClerkProvider>
  );
}

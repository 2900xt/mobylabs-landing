import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import AppNavbar from "@/components/AppNavbar";

export const metadata: Metadata = {
  title: "Moby Labs App",
  description: "Moby Labs Application Dashboard",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AppNavbar />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}

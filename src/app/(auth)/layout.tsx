import { AuthWrapper } from "@/components/AuthWrapper";
import { Suspense } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <AuthWrapper>{children}</AuthWrapper>
        </Suspense>
    );
}

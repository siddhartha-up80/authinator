import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 via-sky-600 to-sky-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔒 Authinator
        </h1>
        <p className="text-white text-lg font-semibold">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant={`secondary`} size={`lg`}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

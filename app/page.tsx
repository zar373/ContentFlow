"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return <p>Loading...</p>;

  if (!isSignedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#36C6D0] via-[#3cd5e0] to-[#278fb5] text-white">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-bold mb-4">ContentFlow</h1>
          <h2 className="text-3xl font-semibold mb-8">Your AI-Powered Content Generation Platform</h2>
          <p className="text-lg mb-8">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>
          <Link href="/sign-in">
            <Button className="bg-white text-[#36C6D0] font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Get Started
            </Button>
          </Link>
        </div>
        <footer className="absolute bottom-4 text-center text-sm">
          Created by Aleezah, Haris, Shoaib, Zargul
        </footer>
      </main>
    );
  }

  return null;
}

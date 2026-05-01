'use client'

import { useSession } from "@/lib/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Navigate to login if user is not authenticated
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  // Prevent flicker by showing loader during auth check
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return session ? children : null;
};

export default PrivateRoute;
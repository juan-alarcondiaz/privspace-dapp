"use client"

import { AuthContext } from "@/contexts";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { getAuthentication } from "@/lib/auth-service";

export default function Auth({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadAuthentication();
  }, []);

  async function loadAuthentication(): Promise<void> {
    try {
      const authentication = await getAuthentication();
      setUser(authentication);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
import loadContract from "@/core/private-info-storage";
import { User } from "@/types/user";

const KEY = "role";

export async function authenticate(): Promise<number> {
  const role = await (await loadContract()).authenticate();
  return Number(role);
}

export async function getAuthentication(): Promise<User> {
  const role: string | null = localStorage.getItem(KEY);
  if (!role) {
    throw new Error("Could not find role user");
  }
  if (!window.ethereum) {
    throw new Error("Unable to parse role user");
  }
  const accounts: string[] = await window.ethereum.request({ method: 'eth_accounts' })
  if (accounts.length == 0) {
    throw new Error("No accounts connected");
  }
  return { user: accounts[0], role: Number(role) } as User;
}

export function setAuthentication(role: number): void {
  try {
    localStorage.setItem(KEY, String(role));
  } catch {
    throw new Error("Error inesperado")
  }
}

export function clearAuthentication(): void {
  localStorage.removeItem(KEY);
}
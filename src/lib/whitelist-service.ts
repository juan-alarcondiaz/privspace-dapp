import loadContract from "@/core/private-info-storage";

export async function addAddress(address: string): Promise<string[]> {
  return await (await loadContract()).addAddress(address);
}

export async function getWhitelist(): Promise<string[]> {
  return await (await loadContract()).getWhitelist();
}

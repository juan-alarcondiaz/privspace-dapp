import loadContract from "@/core/private-info-storage";

export async function updateKiiPrivateInfo(
  kiiPrivateInfo: string,
): Promise<void> {
  return await (await loadContract()).setKiiPrivateInfo(kiiPrivateInfo);
}

export async function getKiiPrivateInfo(): Promise<string> {
  return await (await loadContract()).getKiiPrivateInfo();
}

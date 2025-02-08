import { privateInfoStorageContract } from "@/core/contracts/private-info-storage-contract";
import MetamaskNotInstalledError from "@/errors/metamask-not-installed-error";
import { BrowserProvider, Contract, JsonRpcProvider, JsonRpcSigner } from "ethers";
import AuthenticationError from "@/errors/authentication-error";

let provider: JsonRpcProvider | BrowserProvider;
let signer: JsonRpcSigner;
let contract: Contract;

async function loadProvider(): Promise<void> {
  if (process.env.NODE_ENV == "development") {
    if (!provider) provider = new JsonRpcProvider();
    await setSigner();
    return;
  }
  if (!window.ethereum) {
    throw new MetamaskNotInstalledError();
  }
  if (!provider) provider = new BrowserProvider(window.ethereum);
  await setSigner();
}

async function setSigner(): Promise<void> {
  try {
    signer = await provider.getSigner();
  } catch {
    throw new AuthenticationError();
  }
}

export default async function loadContract(): Promise<Contract> {
  await loadProvider();
  if (!contract || signer !== contract.runner) {
    contract = new Contract(
      privateInfoStorageContract.address,
      privateInfoStorageContract.abi,
      signer
    );
  }
  return contract;
}

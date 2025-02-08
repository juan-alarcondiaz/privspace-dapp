export default class MetamaskNotInstalledError extends Error {
  constructor() {
    super("MetaMask no esta instalado");
  }
}

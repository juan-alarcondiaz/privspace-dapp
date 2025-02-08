export default class UnauthorizedWalletError extends Error {
  constructor() {
    super("Billetera no autorizada");
  }
}

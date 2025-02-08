export default class AddressAlreadyWhitelistedError extends Error {
  constructor() {
    super("La direccion ya esta en la lista blanca");
  }
}
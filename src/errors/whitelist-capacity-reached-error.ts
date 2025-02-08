export default class WhitelistCapacityReachedError extends Error {
  constructor() {
    super("Lista blanca llena");
  }
}
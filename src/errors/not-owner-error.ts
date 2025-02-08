export default class NotOwnerError extends Error {
  constructor() {
    super("No eres propietario");
  }
}
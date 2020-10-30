import CodedError from "../CodedError";

/**
 * Abstract class which is the base class of all certificate related errors.
 */
export default abstract class CertificateError extends CodedError {
  readonly name: string = "Certificate Error";
  readonly code: number = 100;
  readonly message: string = "This is an abstract CertificateError.";

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {
    super();
  }
}

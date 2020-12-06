import { APIResponseError } from "./APIResponseError";

/**
 * Represents the HTTP body of a {@link APIResponse}
 * generated by the Chexxo server API.
 */
export class APIResponseBody {
  constructor(
    /**
     * The uuid of the request which lead
     * to this response.
     */
    readonly requestUuid: string,
    /**
     * Contains the error if one occured. Else
     * this field contains `null`.
     */
    readonly error: APIResponseError | null,
    /**
     * Contains the PEM-formatted certificate
     * if no error occured. Else this field
     * contains `null`.
     */
    readonly certificate: string | null
  ) {}
}

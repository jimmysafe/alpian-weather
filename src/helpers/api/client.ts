import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class APIError extends Error {
	constructor(public code: number, message: string, public details?: string) {
		super(message);
	}
}

export abstract class HttpClient {
	protected readonly instance: AxiosInstance;

	public constructor(baseURL: string, params?: Record<string, unknown>) {
		this.instance = axios.create({
			baseURL,
			params,
		});

		this._initializeResponseInterceptor();
	}

	private _initializeResponseInterceptor() {
		this.instance.interceptors.response.use(
			this._handleResponse,
			this._handleError,
		);
	}

	private _handleResponse = (res: AxiosResponse) => res;

	protected _handleError(error: any) {
		const data = error.response?.data;
		if (data?.code && data?.data?.message)
			return Promise.reject(
				new APIError(data.code, data.data.message, data.data.details),
			);

		return Promise.reject(error);
	}

	/**
	 * Perform a GET request against a resource
	 * @description To perform a request against `https://example.com/current-weather`, pass `/current-weather` as the request URL
	 * @param url Resource (excluding base URL)
	 * @param config Request config parameters
	 * @returns Response
	 */
	public get<T = any, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<R> {
		return this.instance.get<T, R>(url, config);
	}
}

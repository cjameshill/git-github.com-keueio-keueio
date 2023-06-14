import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class HttpRequestWrapper {
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await axios.get(url, config);
        return response.data;
    }

    public async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        const response: AxiosResponse<T> = await axios.post(url, data, config);
        return response.data;
    }

    // Add other HTTP methods as needed (e.g., put, delete, etc.)
}

export default HttpRequestWrapper;

import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

interface KeueIOConfig {
    apiKey: string;
    app: string;
}
class KeueIO {
    private instance: AxiosInstance;
    constructor(protected config: KeueIOConfig) {
        this.instance = axios.create({
            baseURL: `https://${this.config.app}.beta.eu.keue.io`,
        });
        this.instance.interceptors.request.use((config) => {
            config.params = {
                ...config.params,
                apiKey: this.config.apiKey,
            };
            config.headers["User-Agent"] = `KeueIO/${
                process.env.npm_package_version || "latest"
            }`;
            return config;
        });
    }
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.get(url, config);
        return response.data;
    }

    public async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.post(
            url,
            data,
            config,
        );
        return response.data;
    }
    public async publish<T>(
        data: any = {},
        tag: string = "default",
    ): Promise<T> {
        if (!this.config.apiKey) throw new Error("API Key is required");
        if (!this.config.app) throw new Error("App is required");
        const response: AxiosResponse<T> = await this.instance.post(
            `/${tag}`,
            data,
        );
        return response.data;
    }
    // Add other HTTP methods as needed (e.g., put, delete, etc.)
}

export default KeueIO;

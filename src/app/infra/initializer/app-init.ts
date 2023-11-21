import { AppConfig } from '../../app.config';

export function initializer(appConfig: AppConfig): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise<void>(async (resolve, reject) => {
            try {
                await appConfig.load();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from './infra/model/app-config';
import { StorageService } from './infra/storage/storage.service';

@Injectable()
export class AppConfig {

    static settings: IAppConfig;

    constructor(private readonly http: HttpClient, private readonly storageService: StorageService) { }

    load() {
        const jsonFile = "./assets/config/config.json";

        return new Promise<void>((resolve, reject) => {
            this.http.get<IAppConfig>(jsonFile).toPromise().then((response: IAppConfig | undefined) => {
                if (response) {
                    AppConfig.settings = response;
                }
                resolve();
            }).catch((response) => {
                reject(`Não foi possível ler o arquivo '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}

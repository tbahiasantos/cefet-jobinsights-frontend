import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptService {

    static storageKeyEcryptMap: Map<string, string> = new Map<string, string>();

    static encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value, AppConfig.settings.encryptKey).toString();
    }

    static decrypt(value: string): string {
        return CryptoJS.AES.decrypt(value, AppConfig.settings.encryptKey).toString(CryptoJS.enc.Utf8);
    }

    static insertToEncryptMap(key: string, encrypt: string) {
        EncryptService.storageKeyEcryptMap.set(key, encrypt);
    }

    static getEncryptKey(key: string): string {
        const value = EncryptService.storageKeyEcryptMap.get(key);
        if (value) {
            return value;
        }
        return '';
    }
}
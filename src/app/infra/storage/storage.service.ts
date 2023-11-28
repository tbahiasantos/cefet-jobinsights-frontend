import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { EncryptService } from '../encrypt/encrypt.service';
import { TOKEN_KEY } from './storage-definitions';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {

    }

    public static getObject(key: string): any {
        const encryptKey = this.getEncryptKey(key);
        const encryptObject = window.sessionStorage.getItem(encryptKey);
        if (encryptObject) {
            return JSON.parse(EncryptService.decrypt(encryptObject));
        }
        return null;
    }

    public static saveObject(key: string, object: any): void {
        let encryptKey = this.getEncryptKey(key);
        window.sessionStorage.removeItem(encryptKey);
        encryptKey = EncryptService.encrypt(key);
        window.sessionStorage.setItem(encryptKey, EncryptService.encrypt(JSON.stringify(object)));
    }

    public static hasObjectOnStorage(key: string): boolean {
        return this.getObject(key) != null;
    }

    private static getEncryptKey(key: string): string {
        for (let i = 0; i < window.sessionStorage.length; i++) {
            let encryptKey = window.sessionStorage.key(i);
            if (encryptKey && key === EncryptService.decrypt(encryptKey)) {
                return encryptKey;
            }
        }
        return '';
    }

    public static getToken(): string | null {
        const token = window.sessionStorage.getItem(TOKEN_KEY);
        return token;
    }

    public static saveToken(token: string) {
        window.sessionStorage.setItem(TOKEN_KEY, token)
    }

    public static removeToken() {
        window.sessionStorage.removeItem(TOKEN_KEY);
    }

}
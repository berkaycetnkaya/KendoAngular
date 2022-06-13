import { Injectable } from '@angular/core';

@Injectable()
export class StorageNsService {

    setItem<T>(key: string, value: T): void {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
    }

    getItem<T>(key: string): T | undefined {
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        }
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    key(keyIndex: number): string {
        throw new Error('Method not implemented.');
    }

    clear(): void {
        localStorage.clear();
    }
}

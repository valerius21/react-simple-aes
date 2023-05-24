import { decrypt, encrypt } from './crypto';

export function useAesEncrypt<T = string>() {
    return {
        encrypt: encrypt<T>,
    }
}

export function useAesDecrypt<T = string>() {
    return {
        decrypt: decrypt<T>,
    }
}

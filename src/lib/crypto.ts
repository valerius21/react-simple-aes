import superjson from 'superjson';

const IV_LEN = 16;
const SALT_LEN = 16;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const toBase64 = (buffer: ArrayBuffer | number[]): string =>
    btoa(String.fromCharCode(...new Uint8Array(buffer)));

const fromBase64 = (buffer: string): Uint8Array =>
    Uint8Array.from(atob(buffer), (c) => c.charCodeAt(0));

const importKey = async (password: string): Promise<CryptoKey> => {
    const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
    );

    return keyMaterial;
};

const deriveKey = async (
    password: CryptoKey,
    salt: ArrayBuffer,
    iterations = 100_000,
    length = 256,
    hash = 'SHA-256',
    algorithm = 'AES-CBC'
): Promise<CryptoKey> => {
    const derivedKey = await window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations,
            hash,
        },
        password,
        { name: algorithm, length },
        false,
        ['encrypt', 'decrypt']
    );

    return derivedKey;
};

export type Encrypted = {
    salt: string;
    iv: string;
    encrypted: string;
    concatenated: string;
};

export async function encrypt<T = string>(
    password: string,
    content: T
): Promise<Encrypted> {
    const salt = window.crypto.getRandomValues(new Uint8Array(SALT_LEN));
    const iv = window.crypto.getRandomValues(new Uint8Array(IV_LEN));
    const plainText = encoder.encode(superjson.stringify(content));
    const passwordKey = await importKey(password);
    const derivedKey = await deriveKey(passwordKey, salt,);

    const encrypted = await window.crypto.subtle.encrypt(
        { name: 'AES-CBC', iv },
        derivedKey,
        plainText
    );

    return {
        salt: toBase64(salt),
        iv: toBase64(iv),
        encrypted: toBase64(encrypted),
        concatenated: toBase64([...salt, ...iv, ...new Uint8Array(encrypted)]),
    };
}

export async function decrypt<T = string>(
    password: string,
    concatenated: string
): Promise<T> {
    const encrypted = fromBase64(concatenated);
    const salt = encrypted.slice(0, SALT_LEN);
    const iv = encrypted.slice(SALT_LEN, SALT_LEN + IV_LEN);
    const passwordKey = await importKey(password);
    const derivedKey = await deriveKey(passwordKey, salt,);

    const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-CBC', iv },
        derivedKey,
        encrypted.slice(SALT_LEN + IV_LEN)
    );
    const decryptedText = decoder.decode(decrypted);

    return superjson.parse<T>(decryptedText);
}

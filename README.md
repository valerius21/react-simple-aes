# React Simple AES

React Simple AES is a TypeScript library that provides simple hooks for AES encryption and decryption in React using the WebCrypto API. It allows you to easily incorporate AES encryption and decryption functionality into your React applications.

This project is inspired by the article [4 Ways of Symmetric Cryptography and JavaScript: How to AES with JavaScript](https://dev.to/halan/4-ways-of-symmetric-cryptography-and-javascript-how-to-aes-with-javascript-3o1b) by Halan Pineiro.

## Features

- Simple and easy-to-use hooks for AES encryption and decryption.
- Utilizes the WebCrypto API for secure and performant cryptographic operations.
- Built with TypeScript for type safety and enhanced developer experience.
- Compatible with React applications.

## Installation

To install React Simple AES, you can use npm or yarn. Run the following command:

```shell
npm install react-simple-aes
```

or

```shell
yarn add react-simple-aes
```

or

```shell
pnpm add react-simple-aes
```

## Usage

To use React Simple AES in your React application, follow these steps:

1. Import the necessary functions from the library:

   ```typescript
   import { useAesEncrypt, useAesDecrypt } from "react-simple-aes";
   ```

2. Use the `useAesEncrypt` hook to encrypt your data:

   ```typescript
   const { encrypt } = useAesEncrypt();

   // Call the `encrypt` function with your data and encryption key
   encrypt(passwordOrKey, data);
   ```

3. Use the `useAesDecrypt` hook to decrypt your data:

   ```typescript
   const { decrypt } = useAesDecrypt();

   // Call the `decrypt` function with your encrypted data and decryption key
   decrypt(passwordOrKey, encryptedData);
   ```

4. Access the encrypted or decrypted data as needed:

   ```typescript
   console.log(encryptedData);
   console.log(decryptedData);
   ```

## Dependencies

React Simple AES relies on the following dependencies:

- `superjson`: A library for serializing/deserializing JSON that supports various data types.
- `typescript`: A programming language that enables static typing and other advanced features in JavaScript.

These dependencies will be automatically installed when you install React Simple AES.

## License

React Simple AES is licensed under the MIT license.

## Author

React Simple AES is developed and maintained by Valerius Mattfeld. You can reach out to the author via email at mail@valerius.me.

Feel free to contribute to the project by opening issues or submitting pull requests on the [GitHub repository](https://github.com/valerius21/react-simple-aes).

## Contributing

Contributions to React Simple AES are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the [GitHub repository](https://github.com/valerius21/react-simple-aes).

Please follow the [contribution guidelines](CONTRIBUTING.md) when contributing to this project.

## Acknowledgments

This project is inspired by the article [4 Ways of Symmetric Cryptography and JavaScript: How to AES with JavaScript](https://dev.to/halan/4-ways-of-symmetric-cryptography-and-javascript-how-to-aes-with-javascript-3o1b) by Halan Pineiro.

The WebCrypto API and TypeScript have been instrumental in the development of this library.

## Changelog

For a complete list of changes and release notes, see the [CHANGELOG](CHANGELOG.md) file.

## Frequently Asked Questions

#### How can I use

React Simple AES in a non-React project?

React Simple AES is primarily designed for React applications. However, you can potentially use the underlying encryption and decryption functions in non-React projects by directly importing and utilizing the appropriate functions. Keep in mind that some React-specific functionality may not be available in non-React projects.

#### How can I report a security vulnerability?

If you discover a security vulnerability in React Simple AES, please send an email to the author at mail@valerius.me.

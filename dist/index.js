"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const wallet_1 = require("./methods/wallet");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const walletMethods = () => {
    return {
        '1': wallet_1.initializeWallet,
        '2': () => console.log('feauture coming soon')
    };
};
rl.question("Welcome to bitwallet. Please select one option from numbers 1 through 5\n 1. create your wallet\n 2. Send Bitcoin\n", (string) => {
    // input is collected in the parameter (string) in the line above;
    // and used to trigger the function that commits and pulls;
    let allowedMethods = ['1', '2'];
    if (allowedMethods.includes(string)) {
        walletMethods()[string]();
        rl.close();
    }
    else {
        console.log('Invalid option. Please select a number from the list of options provided earlier');
    }
});
//# sourceMappingURL=index.js.map
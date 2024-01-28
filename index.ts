import readLine from 'readline';
import { initializeWallet } from './methods/wallet';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const walletMethods = ()=>{
    return {
        '1':initializeWallet,
        '2':()=>console.log('Reature coming soon. Stay tuned!')
    };
};


rl.question("Welcome to bitwallet. Please select one option from numbers 1 through 5\n 1. create your wallet\n 2. Send Bitcoin\n",(string:'1' | '2')=>{
    // input is collected in the parameter (string) in the line above;
    // and used to trigger the function that commits and pulls;
    let allowedMethods = ['1','2'];

    if(allowedMethods.includes(string)){
        walletMethods()[string]()
        rl.close();
    }
    else{
        console.log('Invalid option. Please select a number from the list of options provided earlier');
    }
});




import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory from 'ecpair';


export const initializeWallet = ()=>{
    const ECPair = ECPairFactory(ecc);
    const network = bitcoin.networks.testnet;
    var {publicKey:pubkey} =ECPair.makeRandom({network});
    const result = bitcoin.payments.p2pkh({ pubkey,network });

    console.log('====================================');
    console.log('Here is your wallet address',result.address);
    console.log('====================================');
}



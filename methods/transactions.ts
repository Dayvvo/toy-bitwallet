import axios from 'axios';
import {Interface} from 'readline';
import  * as bitcoin from 'bitcoinjs-lib';

const blockCypherURL = 'https://api.blockcypher.com/v1/bcy/test/txs/decode';

export const decodeTransactionHex =(rl:Interface)=> {
    rl.question('Enter your transaction hex',async(tx:string)=>{
        try{
            let req = await axios.post(blockCypherURL,{tx});
            let {data}  = req;
            console.log('decoded hex',data);
        }
        catch(err){
            console.log(`Error encountered, ${err?.toString()}`);
        }
    })

}


export function generateRedeemScript(rl:Interface) {
    rl.question('Enter your preimage string',async(preimage:string)=>{
        const sha256Hash = bitcoin.crypto.sha256(Buffer.from(preimage, 'hex'));

        const redeemScript = bitcoin.script.compile([
            bitcoin.opcodes.OP_SHA256,
            sha256Hash,
            bitcoin.opcodes.OP_EQUAL,
        ]);

        const redeemScriptHex = redeemScript.toString('hex');
        return redeemScriptHex;
    });
}


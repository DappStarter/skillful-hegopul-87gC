require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember arrow guess knee bubble suggest'; 
let testAccounts = [
"0xc28bb27db6349b011f5ba1e4381fb62375b2e814a40bf861991eea336f66c8c9",
"0x3a3b68309fe1bc9f644e467fc71237e0b42026f6441f1933d49646bdc7318701",
"0x40316e446bbb3ecddcbc4a8e00b04aa3eb2bdf1a687350d719b260e47cbce1a3",
"0xff5229af816cd534bb104863c8355ce7334060bcb729a186151eb55982dee2ac",
"0xae6499f5b7301dca41a7d5effd318217c58c4f233216eeefed5951eb7e5ee3a2",
"0x994bf3501272110c48e442d8eb27a8c0cc6b7c140e795a7990323b5c89069dc6",
"0xf0723ed47c0b170dec530b2c6fbc9cf4bbe2c493b84e142a40747d359aa504fe",
"0x1ffd2593f85b6b8f77cf6569bae00d1cdc3f59356a512be5ea63cdbe413d151e",
"0xa51b785ff4b02517f597aa84148208db3941cac0df84a800d27579f529d86069",
"0x7f20cf03d23a9accfc6c28dd7e6ffcf2e8dcf02d96d8cbf125dde83ae395e8d4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


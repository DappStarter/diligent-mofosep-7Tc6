require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember pupil grid knee sun theme'; 
let testAccounts = [
"0x55ee18620a92348989266799b94105518cb6d951f75e0a442f5dcf151fd99678",
"0x2609edb7eef8f6e14f23117f512a3533a92e3e054104cc239ddc67b9de5ef09e",
"0xeba7884ff250214e441b2ff634b01a2df0b80bb09b0c75bd970016662da0069e",
"0xb5e2d8c96d3de79651d22ced2da34aac3545f9ed6e5f6cfd743c6b52d1ce2ad2",
"0x2d55d4ecdc9c8e42d7d3377ad94ea179a9df4a53fae6f03b6030fc2f02530f4d",
"0xbaa61bb0d4d7ddc180c868f3f816849c2eae5c4ea72573ba5049b6f920d73bb1",
"0xbb47c0c8d9edf72723753a50b5d0f1d3588e860ab4d737e04c09241d4b0f898b",
"0x356eba8a470efe3f7e248f142df81256f8be3ede24f093cdbf0ebd43084164be",
"0x6980c3604a8d42b138f0564ba7f471e57339d4645c41d485debc83fcf4eb9e7e",
"0x89910e141ba84c3d2b8106049f2209208a5ae41ebcd6fe7e024efd8155a57cd8"
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


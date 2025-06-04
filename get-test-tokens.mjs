#!/usr/bin/env node
import { getFullnodeUrl, IotaClient } from '@iota/iota-sdk/client';
import { getFaucetHost, requestIotaFromFaucetV1 } from '@iota/iota-sdk/faucet';
import { NANOS_PER_IOTA } from '@iota/iota-sdk/utils';

// replace <YOUR_IOTA_ADDRESS> with your actual address, which is in the form 0x123...
const MY_ADDRESS = '0xc6e04eba2e895630462736d303a98f49c161f3bb94243ead6eb13a349cfdee90';

// create a new IotaClient object pointing to the network you want to use
const iotaClient = new IotaClient({ url: getFullnodeUrl('testnet') });

// Convert NANOS to IOTA
const balance = (balance) => {
    return Number.parseInt(balance.totalBalance) / Number(NANOS_PER_IOTA);
};

// store the JSON representation for the IOTA the address owns before using faucet
const iotaBefore = await iotaClient.getBalance({
    owner: MY_ADDRESS,
});

await requestIotaFromFaucetV1({
    // use getFaucetHost to make sure you're using correct faucet address
    // you can also just use the address (see IOTA TypeScript SDK Quick Start for values)
    host: getFaucetHost('testnet'),
    recipient: MY_ADDRESS,
});

// store the JSON representation for the IOTA the address owns after using faucet
const iotaAfter = await iotaClient.getBalance({
    owner: MY_ADDRESS,
});

// Output result to console.
console.log(
    `Balance before faucet: ${balance(iotaBefore)} IOTA. Balance after: ${balance(
        iotaAfter,
    )} IOTA. Hello, IOTA!`,
);
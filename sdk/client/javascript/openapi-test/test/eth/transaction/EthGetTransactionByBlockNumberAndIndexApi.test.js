const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getTransactionByBlockNumberAndIndex API', () => {
    test.skip('should return eth_getTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockNumber = '0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a'
        const index = '0x0'
        sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, index, {}, callbackOne);
    });
});
// TxTypeFeeDelegatedValueTransfer
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedvaluetransfer

const { Web3 } = require("web3");
const { KlaytnWeb3, TxType, toPeb, parseTransaction } = require( "../../dist/web3");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    type: TxType.FeeDelegatedValueTransfer,
    to: recieverAddr,
    value: toPeb("0.01"),
    from: senderAddr,
    gas: 300000,  
  };

  // sender
  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);
  let senderTx = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log(senderTx);

  // tx = parseTransaction(senderTx.rawTransaction);
  // console.log(tx);

  // fee payer
  const feePayer = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayer.privateKey);
  console.log(signResult);

  // tx = parseTransaction(signResult.rawTransaction);
  // console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();

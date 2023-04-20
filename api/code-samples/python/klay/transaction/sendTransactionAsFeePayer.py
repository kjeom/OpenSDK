import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

txObject = {
    "typeInt": 18,
    "from": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
    "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
    "gas": "0x4a380",
    "gasPrice": "0x5d21dba00",
    "nonce": "0x2c",
    "value": "0xf4",
    "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
    "feePayer": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
    "feeRatio": 30,
    "signatures": [{
        "V": "0x4e43",
        "R": "0xd3ff5ca7bdd0120d79e8aa875593d05022fe74ce2b7a0594218d53c0fdca7fa9",
        "S": "0x2c100e69d2455afc9393e017514063da18b18db6f7e811d0aeaf6002515b58ef"
    }]
}

sdk = OpenSDK(host)
klay_response = sdk.klay.send_transaction_as_fee_payer(txObject)

print(json.loads(klay_response.response.data))
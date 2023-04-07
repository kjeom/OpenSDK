import json

from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
klay_response = sdk.klay.gas_price()

print(json.loads(klay_response.response.data))
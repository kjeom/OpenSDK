curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/maxPriorityFeePerGas' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_maxPriorityFeePerGas",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'

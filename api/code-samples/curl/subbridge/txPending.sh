curl -X 'POST' \
  'https://dev.api.klaytn.sotatek.works/subbridge/txPending' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "subbridge_txPending",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'

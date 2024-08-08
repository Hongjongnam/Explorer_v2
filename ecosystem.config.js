module.exports = {
  apps: [
    {
      name: "blockscout-seoul",
      script: "mix phx.server",
      env: {
        DATABASE_URL: "postgresql://postgres:asdf1234@localhost:5432/blockscout",
        SECRET_KEY_BASE: "+zGNSvkvQbNdEjYOO/S6ou0UbVr/YUGU7aO7uJXwX2wOoq/2xVeqbIYVnJRU/HmR",
        ETHEREUM_JSONRPC_VARIANT: "geth",
        ETHEREUM_JSONRPC_HTTP_URL: "https://seoul.worldland.foundation/",
        ETHEREUM_JSONRPC_TRACE_URL: "https://seoul.worldland.foundation/",
        ETHEREUM_JSONRPC_FALLBACK_HTTP_URL: "https://seoul.worldland.foundation/",
        COIN: "ETH",
        COIN_NAME: "WLC",
        MIX_ENV: "prod",
        PORT: 4001,
        WEBAPP_URL: "http://scan.worldland.foundation",
        CHAIN_ID: 103,
        JSON_RPC: "https://seoul.worldland.foundation/",
        PERMANENT_DARK_MODE_ENABLED: "false",
        BLOCKSCOUT_VERSION: "1.0.3",
        FOOTER_LOGO: "/images/logo_1_updated.png",
        NETWORK: "Seoul",
        SUBNETWORK: "WorldLand",
        LOGO: "/images/logo_1_updated.png",
        ETHEREUM_JSONRPC_DISABLE_ARCHIVE_BALANCES: "false",
        INDEXER_DISABLE_PENDING_TRANSACTIONS_FETCHER: "true",
        INDEXER_DISABLE_INTERNAL_TRANSACTIONS_FETCHER: "true",
        BLOCKSCOUT_HOST: "scan.worldland.foundation",
        ECTO_USE_SSL: "false",
        DISABLE_EXCHANGE_RATES: "true",
        INDEXER_DISABLE_BLOCK_REWARD_FETCHER: "false",
        LOGGER_LEVEL: "error",
        SUPPORTED_CHAINS: '[ { "title": "Worldland Seoul", "url": "http://scan.worldland.foundation/" }, { "title": "Worldland Gwangju", "url": "https://testscan.worldland.foundation", "test_net?": true } ]'
      }
    }
  ]
};

# iota-dev

## Create address

```console
iota client new-address
```

```console
iota keytool list
```

## Network ENVs

```console
iota client envs
```

## Indexer

* [IOTA Indexer](https://docs.iota.org/operator/extensions/indexer-functions)
* [Custom Indexer](https://docs.iota.org/developer/advanced/custom-indexer)
* [Run an Indexer](https://github.com/iotaledger/iota/tree/develop/crates/iota-indexer)

### Database setup

```console
cargo install diesel_cli --no-default-features --features postgres
```

```console
cd iota/crates/iota-indexer
diesel setup --database-url="postgres://postgres:postgrespw@localhost/iota_indexer"
```

### Run indexer

```console
iota-indexer --db-url "postgres://postgres:postgrespw@localhost/iota_indexer" --rpc-client-url "https://api.testnet.iota.cafe:443" --fullnode-sync-worker --rpc-server-worker --reset-db
```

### Issues

* https://github.com/rust-rocksdb/rust-rocksdb/issues/316

## GraphQL Interface

### Run GraphQL Interface

```console
iota-graphql-rpc start-server --host 0.0.0.0
```

## Grafana

user / password: `admin` / `admin`

## Ports

| Port | Use |
|---|---|
|`3000`|grafana|
|`5432`|postgres|
|`8000`|graphiql|
|`9184`|prometheus|

## Misc

* https://blog.louie.lu/iota/

# FullStack React GraphQL Typescript Learning

This repo is my follow along for the ben awad [video](https://www.youtube.com/watch?v=I6ypD7qv3Z8).

I'll be using this stack for start with self however want to address some learning hole for production grade web application development.

## Notes (While following along).

### Postgresql

The command is `sudo -i -u postgres` then you can access the postgres prompt via `psql`. If you cannot do so it's likely that your local db is not up and running. `sudo service postgresql start`. Then `sudo -u postgres psql` should work fine to connect as the admin postgres user.

Sometimes with postgres you wont be able to run migrations so check config `/etc/postgresql/13/main/pg_hba.conf`.

If there is no config there you can find it on ubunut via: `sudo find / -type f -name pg_hba.conf`


### MikrORM

Data mapping and migrations done with MikrOrm.

#### Migrations

```sh
npx mikro-orm migration:create   # Create new migration with current schema diff
npx mikro-orm migration:up       # Migrate up to the latest version
npx mikro-orm migration:down     # Migrate one step down
npx mikro-orm migration:list     # List all executed migrations
npx mikro-orm migration:pending  # List all pending migrations
```

### Graphql

https://graphql.org/

### Apollo

The Apollo platform helps you build, query, and manage a data graph: a unified data layer that enables applications to interact with data from any combination of connected data stores and external APIs.


# FullStack React GraphQL Typescript Boilerplate

This repository is boilerplate for starting and creating any new microservice or app. A full javascript family boilerplate that is intended to be used with [boilerplate-web](https://github.com/Prototype-devshop/boilerplate-web).

# Getting Started

- `yarn install` 
- in a seperate terminal start redis with `redis-server` 
- `yarn start`

- git clone [boilerplate-web](https://github.com/Prototype-devshop/boilerplate-web) in the same directory as `boilerplate-web` 
- cd to the `boilerplate-web` repository <br />
```
project
│
└───boilerplate-server
│   │   file011.txt
│   │   file012.txt
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│   
└───boilerplate-web
    │   file021.txt
    │   file022.txt
```

- `yarn install` 
- `yarn start` 
- Open to `localhost:3000`

**Note** Make sure postgres is running in the background.

### Mutations

Anytime we want to add a mutation or a query move into `lireddit-web > graphql > {mutation || query}` and paste in the query we make. Then run `yarn gen` which will output our hooks and we can use the hook. The naming convention is based of the name in the graphql file `use{hookname}Mutation`.

### Postgresql

The command is `sudo -i -u postgres` then you can access the postgres prompt via `psql`. If you cannot do so it's likely that your local db is not up and running. `sudo service postgresql start`. Then `sudo -u postgres psql` should work fine to connect as the admin postgres user.

Sometimes with postgres you wont be able to run migrations so check config `/etc/postgresql/13/main/pg_hba.conf`.

If there is no config there you can find it on ubunut via: `sudo find / -type f -name pg_hba.conf`

### TypeORM

Data mapping and migrations done with typeORM.

### Tools

- [Graphql](https://graphql.org/)

- [Apollo](https://www.apollographql.com/)

The Apollo platform helps you build, query, and manage a data graph: a unified data layer that enables applications to interact with data from any combination of connected data stores and external APIs.

- [Redis](https://redis.io/)

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

### Known Issues

#### Port Listening Issues

Nodemon is always crashing thinking there is already a port open for hot reloading. Command to kill the port for linux:
sudo kill -9 `sudo lsof -t -i:4000

### Helpful Info

#### [Server Side Rendering](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)

Using urql to handle server side rendering of specific components. https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs.

When deciding whether or not to SSR rule of thumb to follow is if any information on this page should be crawled by google. If yes then ssr will be the neccessary tool.

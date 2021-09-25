# FullStack React GraphQL Typescript Learning

This repo is my follow along for the ben awad [video](https://www.youtube.com/watch?v=I6ypD7qv3Z8).

I'll be using this stack for start with self however want to address some learning hole for production grade web application development.

## Notes (While following along).

### Mutations

Anytime we want to add a mutation or a query move into `lireddit-web > graphql > {mutation || query}` and paste in the query we make. Then run `yarn gen` which will output our hooks and we can use the hook. The naming convention is based of the name in the graphql file `use{hookname}Mutation`.

### Postgresql

The command is `sudo -i -u postgres` then you can access the postgres prompt via `psql`. If you cannot do so it's likely that your local db is not up and running. `sudo service postgresql start`. Then `sudo -u postgres psql` should work fine to connect as the admin postgres user.

Sometimes with postgres you wont be able to run migrations so check config `/etc/postgresql/13/main/pg_hba.conf`.

If there is no config there you can find it on ubunut via: `sudo find / -type f -name pg_hba.conf`

### MikrORM

Data mapping and migrations done with typeORM.

### Tools

- [Graphql](https://graphql.org/)

- [Apollo](https://www.apollographql.com/)

The Apollo platform helps you build, query, and manage a data graph: a unified data layer that enables applications to interact with data from any combination of connected data stores and external APIs.

- [Redis](https://redis.io/)

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

### Known Issues

#### Type Declarations

If you are having an issue where VScode doesn't know the type declaration for ` req.session!.userId = user.id;` where it prompts the error `Property 'userId' does not exist on type 'Session & Partial<SessionData>` you will need to add the specific session tags to the express `index.d.ts` file.

```sh
    interface SessionData {
        cookie: Cookie;
        userId: number;
    }
```

#### Port Listening Issues

Nodemon is always crashing thinking there is already a port open for hot reloading. Command to kill the port for linux:
sudo kill -9 `sudo lsof -t -i:4000

### Helpful Info

#### [Server Side Rendering](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)

Using urql to handle server side rendering of specific components. https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs.

When deciding whether or not to SSR rule of thumb to follow is if any information on this page should be crawled by google. If yes then ssr will be the neccessary tool.

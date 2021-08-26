import { MikroORM, PrimaryKey } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const post = orm.em.create(Post, {title: 'my first post'})
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, {title: 'my second post'})
};


main().catch(err => {
  console.error(err)
});
import { type Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  await db.schema
    .alterTable('companies')
    .addColumn('levels_fyi', 'text')
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema
    .alterTable('companies')
    .dropColumn('levels_fyi')
    .execute();
}

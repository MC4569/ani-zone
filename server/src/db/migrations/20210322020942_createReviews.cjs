/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('reviews', table => {
    table.bigIncrements('id')
    table.integer('rating').notNullable()
    table.string('title')
    table.string('content', 1000)
    table.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .references('users.id')
    table.bigInteger('animeId')
      .notNullable()
      .unsigned()
      .index()
      .references('animes.id')
    table.timestamp('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('reviews')
}

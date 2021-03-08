/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('animes', table => {
    table.bigIncrements('id')
    table.string('title').notNullable()
    table.string('productionCompany').notNullable()
    table.string('description').notNullable()
    table.bigInteger('categoryId')
      .notNullable()
      .unsigned()
      .index()
      .references('categories.id')
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
  return knex.schema.dropTableIfExists('animes')
}

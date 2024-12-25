import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Todos extends BaseSchema {
    protected tableName = 'todos'

    public async up() {
        this.createTable(this.tableName, (table) => {
            table.increments('id')
            table.string('title')
            table.boolean('completed').defaultTo(false)
            table.timestamps(true)
        })
    }

    public async down() {
        this.dropTable(this.tableName)
    }
}

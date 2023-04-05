"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class File extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'files';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.timestamp('deleted_at', { useTz: true });
            table.boolean('status').defaultTo(true);
            table.string('name').notNullable();
            table.string('path').notNullable();
            table.uuid('user_id').references('users.id').onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = File;
//# sourceMappingURL=1629471943049_file.js.map
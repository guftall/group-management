
import { default as pkg } from 'pg'
const { types } = pkg
const { Client } = require('pg')
import knex1, { Knex } from 'knex'

types.setTypeParser(types.builtins.INT8, x => {
    let bi = BigInt(x)
    let n = Number(x)
    let bin = BigInt(String(n))
    if (bi == bin) {
        return Number(x)
    } else {
        return BigInt(x)
    }
})
types.setTypeParser(1700, x => parseFloat(x))

export async function getClient() {
    const client = new Client({
        connectionString: process.env.DB_CONNECTION_STRING
    })
    await client.connect()

    return client
}


export const knex = knex1({
    client: 'pg'
}) as Knex


import { default as pkg } from 'pg'
const { types } = pkg
const { Client } = require('pg')

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

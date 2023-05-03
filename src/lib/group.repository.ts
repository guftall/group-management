import { getClient, knex } from './pg'

export async function groups(id?: number): Promise<Group[]> {
    let client = await getClient()

    let q = knex<Group>('groups')
        .select()

    if (id) {
        q = q.where({ id })
    }

    let { sql, bindings } = q.toSQL().toNative()
    let { rows } = await client.query(sql, bindings)
    await client.end()

    return rows.map(row => ({
        id: row.id,
        title: row.title
    }))
}

class Group {
    id: number
    title: string
}

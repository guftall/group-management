import { knex, getClient } from './pg'

export async function members(groupId: number) {
    let q = knex<Member>('member')
        .select()
        .where({ group_id: groupId })

    let { sql, bindings } = q.toSQL().toNative()
    let client = await getClient()
    let { rows } = await client.query(sql, bindings)
    await client.end()
    return rows
}

export class Member {
    id: number
    read_page_count: number
    name: string
    group_id: number
}

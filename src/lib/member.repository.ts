import { getClient } from './pg'

export async function members(groupId: number) {

    let sql = `SELECT * FROM member
        WHERE group_id = $1`

    let client = await getClient()
    let { rows } = await client.query(sql, [groupId])
    await client.end()
    return rows
}

export class Member {
    id: number
    read_page_count: number
    name: string
    group_id: number
}

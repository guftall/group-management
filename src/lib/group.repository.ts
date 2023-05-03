import { getClient } from './pg'

export async function groups(id?: number): Promise<Group[]> {
    let client = await getClient()

    let params = []
    let sql = `SELECT * FROM groups`


    if (id) {
        params.push(id)
        sql = `${sql} WHERE id = $1`
    }

    let { rows } = await client.query(sql, params)
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

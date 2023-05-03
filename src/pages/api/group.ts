import { groups } from '@/lib/group.repository'
import type { NextRequest } from 'next/server'

export const config = {
    runtime: 'edge'
}

export default async function handler(req: NextRequest) {
    let list = await groups()
    return new Response(JSON.stringify(list))
}
import Layout from '@/components/layout'
import { groups } from '@/lib/group.repository'
import { members } from '@/lib/member.repository'
import { useRouter } from 'next/router'

export default function SingleGroup({ group, members }) {
    const router = useRouter()

    return (
        <Layout>
            گروه: {group.title}

            <div>
                کاربر ها
                <div>
                    {members.map(m => (
                        <div key={m.id}>
                            <div>کد: {m.id}</div>
                            <div>نام: {m.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const groupId = +context.query.gid

    let [[group], memberList] = await Promise.all([
        groups(groupId),
        members(groupId)
    ])

    return {
        props: {
            group,
            members: memberList
        }
    }
}

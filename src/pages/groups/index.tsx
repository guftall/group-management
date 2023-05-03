import Layout from '@/components/layout'
import { groups } from '@/lib/group.repository'
import Head from 'next/head'
import Link from 'next/link'

export default function Groups({ groups }) {

    return (
        <Layout>
            <Head>
                <title>گروه ها</title>
            </Head>
            {groups.map((g, i) => (
                <Link href={`/groups/${g.id}`}>
                    <div>id: {g.id}</div>
                    <div>title: {g.title}</div>
                </Link>
            ))}
        </Layout>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            groups: await groups()
        }
    }
}

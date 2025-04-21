import Header from '@/components/Header'
import Link from 'next/link'

export default function About(){
    return (
        <div className='container mx-auto px-4 py-4'>
            <Link href="about/misyon" className="mr-4">Misyonumuz</Link>
            <Link href="about/vizyon">Vizyonumuz</Link>
        </div>
    )
}

import Link from 'next/link';

interface Navs {
    slug: string;
    title: string;
    topicId: string|null;
    url: string;
    scrapable: boolean
}

const NavLinks = async() => {
    const res  = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json();
    const navs: Navs[] = data.data
    const filteredNavs = navs.filter(n => n.scrapable)
    
  return (
    <div className='flex gap-5 jusityf-center'>
        <Link href={'/'}>হোম</Link>
      {
        filteredNavs.map((nav, index) => <Link key={index} href={nav.slug}>{nav.title}</Link>)
      }
    </div>
  )
}

export default NavLinks

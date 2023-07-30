import Image from 'next/image'
import { Header } from './shared/components/Header'
import { LoggedUserProvider } from './shared/context/LoggedUser'
import { PostProvider } from './shared/context/PostContext'
import { PostList } from './shared/components/PostList'
import { Footer } from './shared/components/Footer'


export default function Home() {
  return (
    <div>
      <LoggedUserProvider>
        <PostProvider>
          <Header />
          <PostList/>
          <Footer/>
        </PostProvider>
      </LoggedUserProvider>
    </div>
  )
}

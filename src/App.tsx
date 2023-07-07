
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './index.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/iannak.png",
      name: "Anna Franz",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: '👉 jane.design/doctorcare' },

      // <p>
      //   <a href="#">#novoprojeto</a>{' '}
      //   <a>#nlw</a>{' '}
      //   <a>#rocketseat</a>
      // </p>
    ],
    publishedAt: new Date('2023-05-11 08:13:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: '👉 jane.design/doctorcare' },

      // <p>
      //   <a href="#">#novoprojeto</a>{' '}
      //   <a>#nlw</a>{' '}
      //   <a>#rocketseat</a>
      // </p>
    ],
    publishedAt: new Date('2023-05-12 08:13:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>

    </>
  )
}

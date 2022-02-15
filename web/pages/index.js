import Head from 'next/head'
import Image from 'next/image'
import Header from './_header'
import styles from '../styles/Home.module.scss'

// Test de récupération de doonées depuis l'API
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api-mangarises.herokuapp.com/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { ...data } }
}


export default function Home(props) {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center flex-column bg-light">
      <Header></Header>
      <main className="p-5">
        <h1 className="rounded rounded-pill p-5 mt-5 bg-dark text-light text-center display-2">
          {props.message}
        </h1>

        <p className="lead text-center py-5">
          Get started by editing{' '}
          <code className="p-3 bg-white border">pages/index.js</code>
        </p>

        <div className="row">
          <a href="https://nextjs.org/docs" className="card col w-50 m-3 p-5 border-0 rounded-3 shadow">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card col w-50 m-3 p-5 border-0 rounded-3 shadow">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>

        <div className="row">
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="card col w-50 m-3 p-5 border-0 rounded-3 shadow"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card col w-50 m-3 p-5 border-0 rounded-3 shadow"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-100 text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

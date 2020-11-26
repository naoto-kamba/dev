import { Tags, TagsWithLabel } from 'components/article/Tag'
import { ArticleList } from 'components/ArticleList'
import { readAllTags, readMatters, readSlugs } from 'foundations/MdLoader'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout/Layout'

export const config = {
  amp: true,
}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = readSlugs()
  const matters = await readMatters(slugs)
  const allTags = await readAllTags()
  return {
    props: { slugs, matters, allTags },
  }
}
type HomeProps = {
  slugs: string[]
  matters: { title: string; published: string; tags: string[]; path: string }[]
  allTags: string[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Layout>
      <ArticleList matters={props.matters} />
      <hr />
      <TagsWithLabel tags={props.allTags} />
    </Layout>
  )
}
export default Home

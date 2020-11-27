import { ArticleContent } from './ArticleContent'
import { SocialShares } from './SocialShare'
import { TagsWithLabel } from './Tag'

type ArticleProps = {
  url: string
  title: string
  published: string
  tags: string[]
  content: string
}

export const Article: React.FC<ArticleProps> = (props) => {
  return (
    <div>
      <div>更新日時: {props.published}</div>
      <ArticleContent content={props.content} />
      <hr />
      <TagsWithLabel tags={props.tags} />
      <hr />
      <SocialShares url={props.url} />
    </div>
  )
}

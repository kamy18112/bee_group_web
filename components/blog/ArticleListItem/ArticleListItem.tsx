import Link from 'next/link';
import Image from "next/image";
import { Article } from "../../../libs/microcms";
import styles from './index.module.scss';
import { PublishedDate } from "../Date";

type Props = {
  article: Article;
};

// eslint-disable-next-line import/prefer-default-export
export const ArticleListItem = ({ article }: Props) => (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        <button type='button'>
          {article.thumbnail ? (
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
              />
              <img
                src={article.thumbnail?.url || `/noimage.png`}
                alt=""
                className={styles.image}
                width={article.thumbnail?.width}
                height={article.thumbnail?.height}
              />
            </picture>
          ) : (
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          )}
          <dl className={styles.content}>
            <dt className={styles.title}>{article.title}</dt>
            <dd className={styles.date}>
              <PublishedDate date={article.publishedAt || article.createdAt} />
            </dd>
          </dl>
        </button>
      </Link>
    </li>
  )
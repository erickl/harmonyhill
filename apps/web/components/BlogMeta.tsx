import styles from '../mdx-styles.module.css';

interface BlogMetaProps {
    date: string;
    author: string;
}

export function BlogMeta({ date, author }: BlogMetaProps) {
    return (
        <div className={styles.metaRow}>
            <div>PUBLISHED {date}</div>
            <span className={styles.verticalDivider}>|</span>
            <div className={styles.authorLabel}>
                WRITTEN BY: <span className={styles.authorName}>{author}</span>
            </div>
        </div>
    );
}
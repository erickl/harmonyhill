import type { MDXComponents } from 'mdx/types'
import styles from './mdx-styles.module.css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Map the MDX h1 to a standard h1 with your CSS module class
        h1: ({ children }) => <h1 className={styles.title}>{children}</h1>,

        // Map p tags to your paragraph style
        p: ({ children }) => <p className={styles.paragraph}>{children}</p>,

        ...components,
    }
}
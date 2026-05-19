import Comments from '@/components/Comments';
import TestBlog from '@/content/blog/test-blog.mdx';

export default function BlogPostPage() {
    return (
        <article>
            <TestBlog />

            <Comments slug="test-blog" />
        </article>
    );
}
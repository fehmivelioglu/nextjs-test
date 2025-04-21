import Link from "next/link";

interface BlogProps {
    posts: {
        id: number;
        title: string;
        content: string;
    }[];
}

export default function BlogComponent({ posts }: BlogProps) {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

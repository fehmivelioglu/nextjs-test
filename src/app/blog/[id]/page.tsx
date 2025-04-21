'use client'

import { useParams } from "next/navigation"

export default function BlogPost() {
    // const { id } = await params

    const queryParams = useParams()
    console.log(queryParams)
    if (!queryParams.id) {
        return <div>No id</div>
    }
    return (
        <div>
            <h1>Blog Post {queryParams.id}</h1>
        </div>
    )
}

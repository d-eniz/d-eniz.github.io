import type { Post } from "../pages/index.astro"

export const Card = (props: Post) => {
    const handleClick = () => {
        window.location.href = props.url;
    }
    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <h3>{props.frontmatter.title}</h3>
            <p>{props.frontmatter.description}</p>
            <p className="tags">{props.frontmatter.tags?.join(", ")}</p>
        </div>
    )
    
}
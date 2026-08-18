type PostCardProps = {
    title: string;
    likes: number;
    isPublished: boolean;
    subtitle?: string;
}

function PostCard({ title, likes, isPublished, subtitle }: PostCardProps){
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#f0fff4' }}>
            <h1>Titolo :{title}</h1>
            <p>likes : {likes}</p>
            {subtitle && <h3>{subtitle}</h3>}
            {/* L'operatore va inserito direttamente senza essere avvolto da altri h2 */}
            <p>{isPublished ? "Publicato" : "In Bozza"}</p>
        </div>

    )
}

export default PostCard
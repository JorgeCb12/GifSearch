const GifItem = ({id, title, url , index}) => {
    return (
        <div className="card">
        <img src={url} alt={title} />
        <p key={id}> {index + 1} {title}</p>
        </div>
    )
}

export default GifItem



import React from 'react'
import '../../sass/_articleContainer.scss'

const ArticleItem = ({item}) => {
    console.log(item)
    const {title, sector, product, platform, image, desc, url, clientname } = item
    return (
        <div className='article-item' style={{backgroundImage: `url(${image})`}}>
            <h2>{clientname}</h2>
            <h1>{title}</h1>
            <p>{product}</p>
            <p>{platform}</p>
            <p>{url}</p>
        </div>
    )
}
export default ArticleItem
import React, {Component} from 'react'
import '../../sass/_articleItem.scss'

class ArticleItem extends Component {
    render() {
        const {title, sector, product, platform, image, desc, url, clientname} = this.props.item

        function platformLogic(plat) {
            let x = null

            return plat === '1' ? x = 'FT.com' : x = 'How To Spend It'
        }
        function sectorLogic(sect) {

        }

        function ItemOnClick(a, b) {
            console.log(a)
            console.log(b)
        }
        return(
            <div className='article-item' style={{backgroundImage: `url(${image})`}} onClick={ItemOnClick.bind(this, url)}>
                <h2>{clientname}</h2>
                <h1>{title}</h1>
                <p>{product}</p>
                <p>{platformLogic(platform)}</p>
                <p>{url}</p>
            </div>
        )
    }
}
export default ArticleItem
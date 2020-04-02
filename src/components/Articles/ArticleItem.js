import React, {Component} from "react"
import "../../sass/_articleItem.scss"


class ArticleItem extends Component {
    render() {
        const {title, sector, product, platform, image, desc, url, clientname} = this.props.item

        const SectorContainer = ({tag}) => {
            let sectionArr = sector.split(',')
            return sectionArr.map((sec, i) => {
                const regCase = sec.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                    return str.toUpperCase();
                })
                return (
                    <div className='article-item__tag-item' key={i} data-value={sec}
                         onClick={tag.bind(this)}>{regCase}</div>
                )
            })
        }

        const Truncate = ({input}) => input.length > 50 ? `${input.substring(0, 45)}...` : input;


        function platformLogic(plat) {
            let x = null

            return plat === "1" ? (x = "ft.com") : (x = "How To Spend It")
        }

        function sectorLogic(sect) {
        }

        function NavigateURL(url) {
            window.open(url)
        }

        const Platform = ({value}) => {
            let platformProd = ''
            switch (value) {
                case '1': {
                    platformProd = 'Paid Post'
                    break
                }
                case '2': {
                    platformProd = 'Brand Suite'
                    break;
                }
                case '3': {
                    platformProd = 'Brand Feature'
                    break
                }
                default: {
                    platformProd = null
                    break
                }
            }
            return platformProd
        }

        const Product = ({value}) => {
            let productProd = ''
            switch (value) {
                case '1': {
                    productProd = 'How To Spent It'
                    break
                }
                case '2': {
                    productProd = 'ft.com'
                    break
                }
                default: {
                    productProd = ''
                }
            }
            return productProd
        }

        const ClientName = ({search}) => {
            console.log(search)

            return <div onClick={e => search(e)}>{clientname}</div>
        }

        return (
            <div className='article-item'>
                <img src={image} alt=""/>
                <div className='article-item__content'>
                    <div className='article-item__client-name'>
                        <ClientName search={this.props.searchFilter}/>
                    </div>
                    <div className='article-item__title' onClick={NavigateURL.bind(this, url)}>
                        <Truncate input={title}/>
                    </div>
                    <div className="article-item__filter">
                        <div className="article-item__filter-product">
                            <Product value={product}/>
                        </div>
                        <div className="article-item__filter-platform">
                            <Platform value={platform}/>
                        </div>
                    </div>
                    <div className="article-item__tag">
                        <SectorContainer tag={this.props.tagFilter}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default ArticleItem

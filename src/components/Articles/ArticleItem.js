import React, { Component } from "react"
import "../../sass/_articleItem.scss"


class ArticleItem extends Component {
	render() {
		const { title, sector, product, platform, image, desc, url, clientname } = this.props.item

		const SectorContainer = ({tag}) => {
			let sectionArr = sector.split(',')
			return sectionArr.map((sec, i) => {
				return (
					<li key={i} data-value={sec} onClick={tag.bind(this)}>{sec}</li>
				)
			})
		}

		function platformLogic(plat) {
			let x = null

			return plat === "1" ? (x = "FT.com") : (x = "How To Spend It")
		}

		function sectorLogic(sect) {}

		function ItemOnClick(url) {
		}

		return (
				<div
					className='article-item'
					style={{ backgroundImage: `url(${image})` }}
					onClick={ItemOnClick.bind(this, url)}
				>
					<div className='article-item__content'>
						<div className='article-item__client-name'> {clientname} </div>
						<div className='article-item__title'>{title}</div>

						<p>{product}</p>
						<p>{platformLogic(platform)}</p>

						<SectorContainer tag={this.props.tagFilter}/>
					</div>
				</div>

		)
	}
}
export default ArticleItem

import React, {Component} from 'react'
import {Consumer} from "../../context";

import '../../sass/_filterContainer.scss'

class FilterContainer extends Component {
    render() {

        const ClearBtn = ({value}) => {
            return <button
                className={value.searchVal.length || value.sector.length || value.platform.length || value.product.length ? 'filter-container__close -show' : 'filter-container__close'}
                onClick={value.clearSearchValue.bind(this)}>Clear</button>
        }

        return (
            <React.Fragment>
                <Consumer>
                    {value => {
                        return (
                            <div
                                className={value.isFilterOpen ? 'filter-wrap-container -show' : 'filter-wrap-container'}>
                                <div className='filter-container'>
                                    <ClearBtn value={value}/>
                                    <div className="filter-main-title">
                                    <span>
                                        Filter
                                    </span>
                                    </div>
                                    <div className="filter-wrapper">
                                        <div className="filter-client">
                                            <div className="filter-client__title filter-title">
                                                Client
                                            </div>
                                            <input list='clients'
                                                   className='filter-client__dropdown'
                                                   name="clients"
                                                   id=""
                                                   onChange={value.handleClientChange.bind(this)}
                                                   value={value.searchVal}
                                            />
                                            <datalist id='clients'>
                                                {value.clientList.sort().map((client, i) => <option key={i}
                                                                                                    value={client}>{client}</option>)}
                                            </datalist>
                                        </div>

                                        <div className="filter-products">
                                            <div className="filter-products__title filter-title">
                                                Products
                                            </div>
                                            <div className="filter-platform__input">
                                                <input
                                                    type="radio"
                                                    name='product'
                                                    value='2'
                                                    onChange={value.handleProductChange}
                                                    checked={value.product === '2'}
                                                />
                                                <label htmlFor="banking">FT</label>
                                            </div>
                                            <div className="filter-platform__input">
                                                <input
                                                    type="radio"
                                                    name='product'
                                                    value='1'
                                                    onChange={value.handleProductChange}
                                                    checked={value.product === '1'}
                                                />
                                                <label htmlFor="banking">HTSI</label>
                                            </div>
                                        </div>
                                        <div className="filter-platform">
                                            <div className="filter-platform__title filter-title">
                                                Platform
                                            </div>

                                            <div className="filter-platform__input">
                                                <input
                                                    type="radio"
                                                    name='platform'
                                                    value='1'
                                                    onChange={value.handlePlatformChange}
                                                    checked={value.platform === '1'}
                                                />
                                                <label htmlFor="banking">Brand Story</label>
                                            </div>
                                            <div className="filter-platform__input">
                                                <input
                                                    type="radio"
                                                    name='platform'
                                                    value='2'
                                                    onChange={value.handlePlatformChange}
                                                    checked={value.platform === '2'}
                                                />
                                                <label htmlFor="platform">Brand Suite</label>
                                            </div>
                                            <div className="filter-platform__input">
                                                <input
                                                    type="radio"
                                                    name='platform'
                                                    value='3'
                                                    onChange={value.handlePlatformChange}
                                                    checked={value.platform === '3'}
                                                />
                                                <label htmlFor="platform">Brand Feature</label>
                                            </div>
                                        </div>
                                        <div className="filter-sector">
                                            <div className="filter-sector__title filter-title">
                                                Sector
                                            </div>

                                            <div className="filter-sector__input">
                                                <input
                                                    type="radio"
                                                    name='sector'
                                                    value='banking'
                                                    onChange={value.handleSectorChange}
                                                    checked={value.sector === 'banking'}
                                                />
                                                <label htmlFor="banking">Banking</label>
                                            </div>

                                            <div className="filter-sector__input">
                                                <input
                                                    type="radio"
                                                    name='sector'
                                                    value='businessService'
                                                    onChange={value.handleSectorChange}
                                                    checked={value.sector === 'businessService'}
                                                />
                                                <label htmlFor="banking">Business Service</label>
                                            </div>

                                            <div className="filter-sector__input">
                                                <input
                                                    type="radio"
                                                    name='sector'
                                                    value='construction'
                                                    onChange={value.handleSectorChange}
                                                    checked={value.sector === 'construction'}
                                                />
                                                <label htmlFor="construction">Construction</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-container-underlay"  onClick={value.handleFilterClose}>

                                </div>
                            </div>
                        )
                    }}
                </Consumer>
            </React.Fragment>
        )
    }
}

export default FilterContainer
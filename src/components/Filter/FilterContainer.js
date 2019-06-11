import React, {Component} from 'react'
import {Consumer} from "../../context";

import '../../sass/_filterContainer.scss'

class FilterContainer extends Component {
    render() {

        const ClearBtn = ({value}) => {
            return <button
                className={value.searchVal.length || value.sector.length ? 'filter-container__close -show' : 'filter-container__close'}
                onClick={value.clearSearchValue.bind(this)}>Clear</button>
        }

        return (
            <React.Fragment>
                <Consumer>
                    {value => {
                        return (
                            <div className={value.isFilterOpen ? 'filter-container -show' : 'filter-container'}>
                                <ClearBtn value={value}/>
                                <div className="filter-main-title">
                                    <span>
                                        Filters
                                    </span>
                                </div>
                                <div className="filter-wrapper">
                                    <div className="filter-client">
                                        <div className="filter-client__title filter-title">
                                            Client
                                        </div>
                                        <select className='filter-client__dropdown' name=""
                                                id=""
                                                onChange={value.handleClientChange.bind(this)}
                                                value={value.searchVal}
                                        >
                                            <option disabled defaultValue value=''>Select a Client</option>
                                            {value.clientList.sort().map((client, i) => <option key={i}
                                                                                                value={client}>{client}</option>)}
                                        </select>
                                    </div>

                                    <div className="filter-products">
                                        <div className="filter-products__title filter-title">
                                            Products
                                        </div>
                                        ft.com
                                        how to spend it
                                    </div>
                                    <div className="filter-platform">
                                        <div className="filter-platform__title filter-title">
                                            Platform
                                        </div>
                                        brand story
                                        brand suite
                                        brand feature
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
                        )
                    }}
                </Consumer>
            </React.Fragment>
        )
    }
}

export default FilterContainer
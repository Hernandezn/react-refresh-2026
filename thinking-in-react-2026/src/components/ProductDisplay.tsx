
import { useState, useEffect } from 'react';

import '../css/ProductDisplay.css';

import fetchData from '../util/fetchData';
import type Product from '../types/Product';

import ProductFilterInput from './ProductFilterInput';
import ProductDisplayTable from './ProductDisplayTable';

export interface ProductDatum {
    price: string,
    stocked: boolean,
    name: string
}

/**
 * A data display widget to match the mockup image seen on https://react.dev/learn/thinking-in-react
 * 
 * This is my unique implementation that uses none of the code given by the page above. It will 
 * display any Product data array set to its displayData state, rather than being restricted to 
 * the mock data, and the data is set through asynchronous post-process, as it would be in a live 
 * application.
 * 
 * @param props containing an id number for assigning an id link between label and checkbox
 * @returns 
 */
export default function ProductDisplay(props: { id: number }) {
    const [displayData, setDisplayData] = useState<Product[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [showStockedOnly, setShowStockedOnly] = useState<boolean>(false);

    // set display data asynchronously
    useEffect(
        () => {
            fetchData().then((data) => {
                console.log(data);

                setDisplayData(data)
            }
            )
        },
        []
    );

    // input handlers
    function handleSearch(searchInput: string) {
        setSearchText(searchInput);
    }
    function handleCheckboxToggle(checkboxState: boolean) {
        setShowStockedOnly(checkboxState);
    }

    return (
        <div className="product-display">
            <ProductFilterInput id={props.id} onSearch={handleSearch} onCheckboxToggle={handleCheckboxToggle} />

            <br />

            <ProductDisplayTable products={displayData} searchText={searchText} showStockedOnly={showStockedOnly} />
        </div>
    );
}

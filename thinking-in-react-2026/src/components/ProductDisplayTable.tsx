
import '../css/ProductDisplayTable.css';

import type Product from "../types/Product";

import ProductCategory from './ProductCategory';

export interface ProductDatum {
    price: string,
    stocked: boolean,
    name: string
}

export default function ProductDisplayTable(props: { products: Product[], searchText: string, showStockedOnly: boolean }) {
    // filter products into this list based on search text & whether to show stocked items only
    const filteredProducts: Product[] = [];
    for (const product of props.products) {
        if (
            !(props.showStockedOnly && !product.stocked)
            && product.name.includes(props.searchText)
        ) {
            filteredProducts.push(product);
        }
    }

    // re-shapes the data into the shape of the display
    // products are members of a category, a category isn't a member of a product
    // in a real application, this may indicate non-normalized data/database design...
    const productsMap: Map<string, ProductDatum[]> = new Map();
    for (const product of filteredProducts) {
        if (!productsMap.has(product.category)) {
            productsMap.set(product.category, []);
        }

        productsMap.get(product.category)!.push({
            price: product.price,
            stocked: product.stocked,
            name: product.name
        });
    }

    // Makes display entries out of the map data
    const productCategories = [];
    for (const [category, products] of productsMap.entries()) {
        productCategories.push(
            <ProductCategory  key={category} category={category} products={products} />
        );
    }

    return (
        <table className="product-display-table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {productCategories}
            </tbody>
        </table>
    );
}

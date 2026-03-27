
import '../css/ProductCategory.css'

import type { ProductDatum } from "./ProductDisplayTable";

import ProductEntry from "./ProductEntry";

export default function ProductCategory(props: { category: string, products: ProductDatum[] }) {
    const productEntries = [];

    for (const product of props.products) {
        productEntries.push(<ProductEntry key={product.name} datum={product} />);
    }

    return (
        <>
            <tr>
                <td className="product-category" colSpan={2}>
                    {props.category}
                </td>
            </tr>

            {productEntries}
        </>
    );
}

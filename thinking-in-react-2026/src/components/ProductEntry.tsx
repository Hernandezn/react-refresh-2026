
import '../css/ProductEntry.css';

import type { ProductDatum } from "./ProductDisplayTable";

export default function ProductEntry(props: { datum: ProductDatum }) {
    return (
        <tr className={props.datum.stocked ? '' : 'out-of-stock'}>
            <td>
                {props.datum.name}
            </td>
            <td>
                {props.datum.price}
            </td>
        </tr>
    );
}

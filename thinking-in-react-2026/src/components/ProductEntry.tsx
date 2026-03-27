
import '../css/ProductEntry.css';

import type { ProductDatum } from "./ProductDisplayTable";

export default function ProductEntry(props: { datum: ProductDatum, displayed?: boolean }) {
    const classNames:string[] = props.datum.stocked ? [] : ['out-of-stock'];

    if (props.displayed === false) {
        classNames.push('hidden');
    }

    return (
        <tr className={classNames.join(' ')}>
            <td>
                {props.datum.name}
            </td>
            <td>
                {props.datum.price}
            </td>
        </tr>
    );
}

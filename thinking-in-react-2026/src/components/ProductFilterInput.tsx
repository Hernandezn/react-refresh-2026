
/**
 * Input elements for filtering output.
 * 
 * Separated into its own component to practice passing state.
 * 
 * @returns 
 */
export default function ProductFilterInput(props: { id: number }) {
    
    const checkboxId: string = `show-in-stock-toggle-${props.id}`;
    return (
        <div className="product-filter-input">
            <input type="text" placeholder="Search..."></input>
            
            <br />

            <input type="checkbox" id={checkboxId}></input>
            <label htmlFor={checkboxId}>Only show products in stock</label>
        </div>
    )
}

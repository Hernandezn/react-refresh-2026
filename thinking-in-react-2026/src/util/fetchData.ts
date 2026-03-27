
import type Product from '../types/Product'

/**
 * Simulation of a data-fetching function for retrieving product data.
 * 
 * @returns Promise of an array of Product items
 */
export default async function fetchData():Promise<Product[]> {
    return new Promise<Product[]>((resolve) => resolve([
        createProduct('Fruits', '$1', true, 'Apple'),
        createProduct('Fruits', '$1', true, 'Dragonfruit'),
        createProduct('Fruits', '$2', false, 'Passionfruit'),
        createProduct('Vegetables', '$2', true, 'Spinach'),
        createProduct('Vegetables', '$4', false, 'Pumpkin'),
        createProduct('Vegetables', '$1', true, 'Peas')
    ]));
};

/**
 * Helper function for creating Product objects using slightly less code repetition.
 * 
 * @param category product category
 * @param price product price
 * @param stocked boolean representing whether the product is in stock
 * @param name product name
 * @returns 
 */
function createProduct(category: string, price: string, stocked: boolean, name: string): Product {
    return {
        category,
        price,
        stocked,
        name
    };
}

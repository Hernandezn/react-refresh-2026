
import './css/App.css'

import ProductDisplay from './components/ProductDisplay'

export default function App() {
    return (
        <div className="app">
            <h3>
                Thinking in React
            </h3>
            <ProductDisplay id={1} />
        </div>
    );
}

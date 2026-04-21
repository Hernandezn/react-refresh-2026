
import LikeButton from './like-button-using-server-actions.jsx';
import LoveButton from './love-button-using-server-api.jsx';

function Header({message}) {
    return <h1>
        {message ? message : 'No message found'}
    </h1>;
}

export default function HomePage() {
    const names = ['Wicky Woo', 'Lady Savannah', 'Colonel Mustard'];

    return(
        <div>
            <Header message="Develop. Preview. Ship." />
            <ul>
                {names.map(
                    (name) => <li key={name}>{name}</li>
                )}
            </ul>
            <LikeButton />
            <LoveButton />
        </div>
    );
}

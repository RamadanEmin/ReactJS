let rootElement = document.getElementById('root');

// let reactElement = React.createElement('header',
//     { className: 'site-header' },
//     React.createElement('h1', { id: 'main-heading' }, 'Hello React'),
//     React.createElement('h2', {}, 'The best framework in the world!'));

let reactElement = (
    <div>
        <header>
            <h1>Hello JSX Modified</h1>
            <h2>The best framework in the world!</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos maiores dolore
                dolores nostrum accusantium officia voluptas architecto recusandae amet ratione.
            </p>
        </header>
        <footer>All rights reserved &copy;</footer>
    </div>
);

ReactDOM.render(reactElement, rootElement);
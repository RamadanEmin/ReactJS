var rootElement = document.getElementById('root');

// let reactElement = React.createElement('header',
//     { className: 'site-header' },
//     React.createElement('h1', { id: 'main-heading' }, 'Hello React'),
//     React.createElement('h2', {}, 'The best framework in the world!'));

var reactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX Modified'
    ),
    React.createElement(
        'h2',
        null,
        'The best framework in the world!'
    ),
    React.createElement(
        'p',
        null,
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos maiores dolore dolores nostrum accusantium officia voluptas architecto recusandae amet ratione.'
    ),
    React.createElement(
        'footer',
        null,
        'All rights reserved \xA9'
    )
);

ReactDOM.render(reactElement, rootElement);
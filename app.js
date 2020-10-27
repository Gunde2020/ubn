import { HeaderLarge } from './HeaderLarge.js';
import { HeaderTop } from './HeaderTop.js';
export function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(HeaderTop, null),
        React.createElement(HeaderLarge, null)
    );
}
import {createBrowserHistory, createMemoryHistory} from 'history';

const history = process.env.BUILD_TARGET === 'client' ? createBrowserHistory() : createMemoryHistory();
history.listen(() => {
    if (window) {
        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (e) {
            window.scrollTo(0, 0);
        }
    }
});

export default history;

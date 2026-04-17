import '../css/app.css';
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';



createInertiaApp({
    title: (title) => {
        let appName = 'Little Paris';
        try {
            const pageData = JSON.parse(document.getElementById('app').dataset.page);
            if (pageData.props.appName) {
                appName = pageData.props.appName;
            }
        } catch (e) {}
        
        return `${title} - ${appName}`;
    },
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

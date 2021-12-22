import { deployed } from '../utils/getAppStatus';

const mainRoute = deployed ? "/cientifico" : "/";

const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="${mainRoute}">
                        100tifi.co
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/"> 
                    About
                </a>
            </div>
        </div>
    `;
    return view;
}

export { Header };
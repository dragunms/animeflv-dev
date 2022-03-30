import {html as htmlTemplate, oneLineTrim} from 'common-tags';

import {DEVICE} from 'src/constants/system';

export default function basePage(helmet, markup, scriptTags, styleTags, linkTags, preloadState) {
    return oneLineTrim(htmlTemplate`<!doctype html>
    <html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        ${
            preloadState.init.device.type === DEVICE.MOBILE
                ? '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>'
                : '<meta name="viewport" content="width=device-width, initial-scale=1">'
        }
        <link rel="alternate" href="https://${preloadState.init.domain}" hrefLang="en_us" />
        <link rel="canonical" href="${preloadState.metadata.metadata_url}" hrefLang="en_us" />
        <link rel="apple-touch-icon" sizes="57x57" href="${process.env.PUBLIC_PATH}apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="${process.env.PUBLIC_PATH}apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="${process.env.PUBLIC_PATH}apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="${process.env.PUBLIC_PATH}apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="${process.env.PUBLIC_PATH}apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="${process.env.PUBLIC_PATH}apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="${process.env.PUBLIC_PATH}apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="${process.env.PUBLIC_PATH}apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="${process.env.PUBLIC_PATH}apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="${process.env.PUBLIC_PATH}android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="${process.env.PUBLIC_PATH}favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="${process.env.PUBLIC_PATH}favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="${process.env.PUBLIC_PATH}favicon-16x16.png">
        <link rel="stylesheet" type="text/css" href="${process.env.PUBLIC_PATH}fonts/font.css" >
        <link rel="manifest" href="${process.env.PUBLIC_PATH}manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="${process.env.PUBLIC_PATH}ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${linkTags}
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadState)}</script>
        ${scriptTags}
        </body>
</html>`);
}

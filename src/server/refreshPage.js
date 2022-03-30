import {html as htmlTemplate, oneLineTrim} from 'common-tags';

export default function refreshPage() {
    return oneLineTrim(htmlTemplate`
        <!doctype html>
        <html lang="en">
            <head>
               <meta http-equiv="refresh" content="5">
            </head>
            <body>
               Loading page...
            </body>
        </html>`);
}

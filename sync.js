const {exec} = require('child_process');
const path = require('path').resolve(__dirname, '..');
const fs = require('fs');

async function runExec(command) {
    return new Promise((resolve) => {
        const child = exec(command);

        child.stdout.on('data', (data) => {
            console.log(data);
        });

        child.on('close', (code) => {
            resolve();
        });
    });
}

(async () => {
    const dev_package = JSON.parse(fs.readFileSync(`${path}/dev/package.json`, 'utf8'));

    const sync_package = JSON.parse(fs.readFileSync(`${path}/${process.env.REACT_APP_ENV}/package.json`, 'utf8'));

    sync_package.dependencies = dev_package.dependencies;
    fs.writeFileSync(`${path}/${process.env.REACT_APP_ENV}/package.json`, JSON.stringify(sync_package));

    await runExec(`cd ${path}/${process.env.REACT_APP_ENV} && git pull`);

    await runExec(`rsync -avz --delete ${path}/dev/build  ${path}/${process.env.REACT_APP_ENV}`);
    await runExec(`rsync -avz --delete ${path}/dev/src/locales  ${path}/${process.env.REACT_APP_ENV}/build/`);

    await runExec(`cd ${path}/${process.env.REACT_APP_ENV} && git add . && git commit -m 'update'`);

    await runExec(`cd ${path}/${process.env.REACT_APP_ENV} && git push origin master`);
})();

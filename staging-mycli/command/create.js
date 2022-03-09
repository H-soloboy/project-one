const { exec } = require("child_process");

function createAction(name) {
    // 仓库地址
    const url = "https://github.com/H-soloboy/H-soloboy.git";
    // 克隆项目
    exec(`git clone ${url} ${name}`, (error, stdout, stderr) => {
        if(error) {
            console.log(error)
            process.exit();
        }
        console.log('Success');
        process.exit();
    });
}
const create = {
    alias: 'c',
    params: '<project-name>',
    description: 'crete a nesw project',
    action: createAction,
}
module.exports = create;
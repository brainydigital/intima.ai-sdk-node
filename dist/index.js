"use strict";
exports.__esModule = true;
var process_copy_1 = require("./resources/process_copy");
var Intimaai = /** @class */ (function () {
    function Intimaai(api_token) {
        this.copyResource = new process_copy_1.ProcessCopy();
        this.copyResource.setSecretKey(api_token);
    }
    return Intimaai;
}());
exports["default"] = Intimaai;
// const copy = new ProcessCopy();
// copy.setSecretKey('123abc');
// async function test() {
//     try {
//         const intimaai = new Intimaai('5b7d65f6e5c16');
//         const result = await intimaai.copyResource.getNewCopy('00002361720205060144', '120');
//         console.log('result: ', result);
//         // const paginator = await copy.paginate();
//         // await paginator.nextPage();
//         // await paginator.loadAll();
//         // console.log('results: ', paginator);
//     } catch (error) {
//         console.error('error: ', error);
//     }
// }
// test();

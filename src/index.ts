import { ProcessCopy } from "./resources/process_copy";

class Intimaai {

    public copyResource: ProcessCopy;

    constructor(api_token: string) {
        this.copyResource = new ProcessCopy();
        this.copyResource.setSecretKey(api_token);
    }

}

export default Intimaai;

// const copy = new ProcessCopy();
// copy.setSecretKey('123abc');

// async function test() {
//     try {

//         const intimaai = new Intimaai('');

//         const result = await intimaai.copyResource.getNewCopy('', '120');

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
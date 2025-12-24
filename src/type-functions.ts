
type args = string | number | boolean;
function bootstrap(dirname: string, args?: args[]): boolean {

    return true;
}

type MainFunction = (args: string[]) => void;

const main: MainFunction = (args) => {

}

interface Functions {
    run(context: any): void;
    execute(): boolean;
    handle(req: Request, res: Response):void;
}

const funcs: Functions = {
    execute() {
        return true;
    },
    handle(req, res) {
        req.integrity;
    },
    run(context) {
        return true;
    },
}

function oldCustomLog(text: string, color: string = "green", time?: Date, author?: string){
    console.log(text, color);
    if (time) console.log("At:", time);
    if (author) console.log("By:", author);
}

oldCustomLog("Hello world", "green", new Date, "Murilo");

interface CustomLogOption {
    color?: string;
    time?: Date;
    author?: string;
}

function customLog(text: string, options: CustomLogOption = {}) {
    const { color = "green", time, author } = options;
    console.log(color, text);
    if (time) console.log("At:", time.toString());
    if (author) console.log("By:", author);
}
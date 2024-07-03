/// <reference types="debug" />
export declare class Logger {
    #private;
    constructor(prefix?: string);
    private createLogger;
    get debug(): debug.Debugger;
    get warn(): debug.Debugger;
    get error(): debug.Debugger;
}
//# sourceMappingURL=Logger.d.ts.map
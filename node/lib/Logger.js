"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const debug_1 = require("debug");
const APP_NAME = 'mediasoup';
class Logger {
    #debug;
    #warn;
    #error;
    constructor(prefix) {
        if (prefix) {
            this.#debug = this.createLogger(`${APP_NAME}:${prefix}`);
            this.#warn = this.createLogger(`${APP_NAME}:WARN:${prefix}`);
            this.#error = this.createLogger(`${APP_NAME}:ERROR:${prefix}`);
        }
        else {
            this.#debug = this.createLogger(APP_NAME);
            this.#warn = this.createLogger(`${APP_NAME}:WARN`);
            this.#error = this.createLogger(`${APP_NAME}:ERROR`);
        }
        /* eslint-disable no-console */
        // this.#debug.log = console.info.bind(console);
        // this.#warn.log = console.warn.bind(console);
        // this.#error.log = console.error.bind(console);
        /* eslint-enable no-console */
    }
    createLogger(namespace) {
        const logger = (0, debug_1.default)(namespace);
        logger.log = (...args) => {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            const formattedDate = `${now.toLocaleString(undefined, options)}.${now.getMilliseconds().toString().padStart(3, '0')}`;
            console.log(`[${formattedDate}]`, ...args);
        };
        return logger;
    }
    get debug() {
        return this.#debug;
    }
    get warn() {
        return this.#warn;
    }
    get error() {
        return this.#error;
    }
}
exports.Logger = Logger;

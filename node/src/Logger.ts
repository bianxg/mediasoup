import debug from 'debug';

const APP_NAME = 'mediasoup';

export class Logger
{
	readonly #debug: debug.Debugger;
	readonly #warn: debug.Debugger;
	readonly #error: debug.Debugger;

	constructor(prefix?: string)
	{
		if (prefix)
		{
			this.#debug = this.createLogger(`${APP_NAME}:${prefix}`);
			this.#warn = this.createLogger(`${APP_NAME}:WARN:${prefix}`);
			this.#error = this.createLogger(`${APP_NAME}:ERROR:${prefix}`);
		}
		else
		{
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

	private createLogger(namespace: string): debug.Debugger {
		const logger = debug(namespace);
		logger.log = (...args: any[]) => {
			const currentDate = new Date().toISOString();
			console.log(`[${currentDate}]`, ...args);
		};
		return logger;
	}

	get debug(): debug.Debugger
	{
		return this.#debug;
	}

	get warn(): debug.Debugger
	{
		return this.#warn;
	}

	get error(): debug.Debugger
	{
		return this.#error;
	}
}

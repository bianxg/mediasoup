import debug from 'debug';

const APP_NAME = 'mediasoup';

export class Logger {
	readonly #debug: debug.Debugger;
	readonly #warn: debug.Debugger;
	readonly #error: debug.Debugger;

	constructor(prefix?: string) {
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
	}

	private createLogger(namespace: string): debug.Debugger {
		const logger = debug(namespace);
		logger.log = (...args: any[]) => {
			const now = new Date();
			const options: Intl.DateTimeFormatOptions = {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: false
			};
			const formattedDate = `${now.toLocaleString(undefined, options)}.${now.getMilliseconds().toString().padStart(3, '0')}`;
			console.log(`[${formattedDate}]${args[0]}`, ...args.slice(1));
		};
		return logger;
	}

	get debug(): debug.Debugger {
		return this.#debug;
	}

	get warn(): debug.Debugger {
		return this.#warn;
	}

	get error(): debug.Debugger {
		return this.#error;
	}
}

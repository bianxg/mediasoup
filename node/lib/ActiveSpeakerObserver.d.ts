import { RtpObserver, RtpObserverEvents, RtpObserverObserverEvents } from './RtpObserver';
import { Producer } from './Producer';
import { EnhancedEventEmitter } from './EnhancedEventEmitter';
export interface ActiveSpeakerObserverOptions {
    interval?: number;
    /**
     * Custom application data.
     */
    appData?: Record<string, unknown>;
}
export interface ActiveSpeakerObserverActivity {
    /**
     * The producer instance.
     */
    producer: Producer;
}
export type ActiveSpeakerObserverEvents = RtpObserverEvents & {
    dominantspeaker: [{
        producer: Producer;
    }];
};
export type ActiveSpeakerObserverObserverEvents = RtpObserverObserverEvents & {
    dominantspeaker: [{
        producer: Producer;
    }];
};
export declare class ActiveSpeakerObserver extends RtpObserver<ActiveSpeakerObserverEvents> {
    /**
     * @private
     */
    constructor(params: any);
    /**
     * Observer.
     */
    get observer(): EnhancedEventEmitter<ActiveSpeakerObserverObserverEvents>;
    private handleWorkerNotifications;
}
//# sourceMappingURL=ActiveSpeakerObserver.d.ts.map
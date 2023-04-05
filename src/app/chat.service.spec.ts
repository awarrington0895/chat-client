import WS from 'jest-websocket-mock';
import { ChatService } from './chat.service';
import { take } from 'rxjs/operators';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('ChatService', () => {
    let server: WS;

    const wsUrl = "ws://localhost:1234"

    beforeEach(() => {
        server = new WS(wsUrl, { jsonProtocol: true });
    });
    
    afterEach(() => {
        WS.clean();
    })

    it('should connect to mock websocket server', async () => {
        const service = new ChatService(wsUrl);

        subscribeSpyTo(service.messages$);

        await server.connected;
    });

    it('should be able to receive a message from websocket server', async () => {
        const service = new ChatService(wsUrl);

        const testMessage = 'test message';

        const messagesSpy = subscribeSpyTo(service.messages$);

        await server.connected;

        server.send(testMessage);

        expect(messagesSpy.getLastValue()).toStrictEqual(testMessage);
    });

    // TODO: Make this test pass
    it('should attempt to reconnect if the connection is closed', async () => {
        const service = new ChatService(wsUrl);

        const messagesSpy = subscribeSpyTo(service.messages$);

        await server.connected;

        server.close();

        await server.closed;

        await server.connected;

        const newSpy = subscribeSpyTo(service.messages$);

        server.send('after failure');

        expect(newSpy.getLastValue()).toStrictEqual('after failure');
    });
});
import WS from 'jest-websocket-mock';
import { ChatService } from './chat.service';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

/**
 * Per the jest-websocket-mock documentation, it is important not to 
 * use fakeAsync with these tests since it is relying on setTimeouts 
 * under the hood to wait on certain events
 */

describe('ChatService', () => {
    let server: WS;

    const wsUrl = "ws://localhost:1234"

    const createServer = () => new WS(wsUrl, { jsonProtocol: true });

    beforeEach(() => {
        server = createServer();
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

    it('should attempt to reconnect if the connection is closed', async () => {
        const service = new ChatService(wsUrl);

        const messagesSpy = subscribeSpyTo(service.messages$);

        await server.connected;

        server.send('Before Disconnect')

        server = await simulateDisconnect(server); 

        await server.connected;

        server.send('After Disconnect');

        expect(messagesSpy.getValues()).toStrictEqual(['Before Disconnect', 'After Disconnect']);
    });

    async function simulateDisconnect(server: WS): Promise<WS> {
        server.error();

        await server.closed;

        /**
         * Creating a new server is important here because the mocked server closes all connections
         * then unregisters itself from the global WebSocket object.
         * This will prevent new connections from being established on the previous mock.
         * */ 
        return createServer();
    }
});
const fs = require('fs');

const webSocketUrl = process.env['WEBSOCKET_URL'];

const environmentFile = `
export const environment = {
    webSocketUrl: '${webSocketUrl}'
}
`;

fs.writeFileSync('environment.ts', environmentFile);
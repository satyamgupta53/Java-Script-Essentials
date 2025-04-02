const { log } = require('console')
const dns = require('dns')

dns.lookup('localhost', (err, address, family) => {
    log('Local host IP address is :', address);
    log('Address family belongs to :', family === 4 ? 'IPv4' : 'IPv6');
})
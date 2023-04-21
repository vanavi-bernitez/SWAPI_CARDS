import * as fs from 'fs';
import { getPeople } from './modules/getter.js'
import { replaceTemplate } from './modules/replaceTemplate.js'
import * as http from 'http';

const cardTemplate = fs.readFileSync('./template/cardTemplate.html', 'utf-8');
const index = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((request, response) => {
    const pathName = request.url;
    if (pathName === '/' || pathName === '/main') {
        response.writeHead(200, {
            'Content-type': 'text/html'
        })

        const getPeopleData = async () => {
            const peopleData = await getPeople();
            const peopleDataCloned = [...peopleData];
            const cardsPeople = peopleDataCloned.map((person) => replaceTemplate(cardTemplate, person)).join('');
            const output = index.replace('((Content))', cardsPeople)
            response.end(output);
        }
        getPeopleData()
    } else {
        response.writeHead(404);
        response.end('Page not found');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
})




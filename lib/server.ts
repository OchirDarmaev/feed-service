import app from './app';
import * as http from 'http';
const PORT = process.env.PORT || 3005;

http.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
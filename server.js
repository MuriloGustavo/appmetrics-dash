import app from './src/app';
import dash from 'appmetrics-dash';

const port = 3000;

dash.attach();

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
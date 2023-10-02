import express from "express";
const app = express();

app.get('/', (req, res) => {
    const q = req.query;
    console.log(q);
    res.send(`YOTO! YOTO!, ${q.name}`);
});

app.listen(3000, () => {
    console.log(`Nyissad mar ki eztet legyel szives a bongeszodben: http://127.0.0.1:3000`);
});

app.get('/another-path', (req, res) => {
    res.send('YOTO! Looks like its a repeat!');
});

app.get('/users/:userId', (req, res) => {
    res.send(`a user id az ez : ${req.params.userId}`);
    console.log(req.params);
});

app.get('/math/:op', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const { op } = req.params;

    const result = op === 'add'
        ? x + y : op === 'subtract'
            ? x - y : op === 'multiply'
                ? x * y : op === 'divide'
                    ? x / y : false;

                    const resultObject = {
                        numbers: {
                            x: x,
                            y: y
                        },
                    operation: op,
                    result: result 
                    ? result 
                    : `Unrecognizable operation name`
                    };

                    res.send(resultObject);

    // res.send(result ? `The result is ${result}`
    //     : `${op} is an unrecognizable operation name`);
});
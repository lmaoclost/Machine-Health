const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.use(express.json());

app.post('/diabetes', (req, res) => {
    // grab the body request
    diabetesInfo = req.body;

    var pythonData

    // Run the python script passing the request body in JSON format
    const python = spawn('python', ['pythonCode/Diabetes/script.py', JSON.stringify(diabetesInfo)]);

    python.stdout.on('data', function (data) {
        // Save the return from the script
        pythonData = JSON.parse(data.toString());
    });

    python.stderr.on('data', (data) => {
        // Console log any error that the script may return
        console.log('Error-->' + data);
    });

    python.on('close', (code) => {
        // Return the script result
        return res.json(pythonData)
    });

})
app.listen(3000)

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://pgdb.accsoftwarebootcamp.com:27017/diabetes',
    {
        useNewUrlParser: true ,
        useUnifiedTopology:true
    },
    function(){
        console.log('connected to mongodb ')
    }
)
// define schema

let patientSchema =mongoose.Schema({
   firstName: {
        type: String,
        required: [true, `Name is REQUIRED`]
    },
    lastName: {
        type: String,
        required: [true, `Name is REQUIRED`]
    },
    username: {
        type: String,
        required: [true, `User Name is REQUIRED`]
    },
    MDID: {
        type: String,
       
    },
    GBS: {
        type: [{time:Date,GBS:Number}],        
    },
     points: {         
        type: Number,
    },
    A1C: {         
        type: Number,
    },
    msgToMd: {
        type: String,
    },
    msgToPT: {
        type: String,
    }
})
mongoose.model('Patient', patientSchema);
// create model
let PatientModel = mongoose.model('patient', patientSchema)

// hard coded data d/t issues with mongo
let testPt = [{
    "firstName":"able",
    "lastName":"apple",
    "username":"alpha",
    "MDID":"111aaa",
    "GBS": [{time: 0600, GBS:100}],
    "points": 10,
    "A1C": 6.4,
    "msgToMd": "hello doc",
    "msgToPt": "hello patient"
    },
    {
        "firstName":"backer",
        "lastName":"banana",
        "username":"bravo",
        "MDID":"222bbb",
        "GBS": [{time: 0700, GBS:101}],
        "points": 20,
        "A1c": 6.2,
        "msgToMd": "hi there",
        "msgToPt":"hi back"
        }]

// READ
    app.get('/Patient', function(req, res) {
        PatientModel.find({}, (err, Patient)=> {
            if(err){
                console.log('There has been an error getting data from db', err)
                res.status(400).send({code: 1234, message: `There is an error: ${err}`})
            }
            res.send(Patient)
        })
    });
// POST
app.post('/Patient', (req, res) => {
    PatientModel.create(testPt, (err, newPatient)=>{
        console.log(newPatient)
        if(err){
            console.log('There has been an error getting data from db', err)
            res.status(400).send({code: 1234, message: `There is an error: ${err}`})
        }
        res.status(201).send(newPatient)
    })
})

// 8) Delete - DELETE - findByIdAndDelete based on id
app.delete('/Patient/:Patientid', function(req, res) {
    PatientModel.findByIdAndDelete(req.params.id, function(err, Patient) {
        if(err) {
            res.status(404).send({
                code: 1234,
                message: 'There is an error finding item with matching id',
                err: err
            });
        } else {
            res.send();
        }
    });
})

// 7) Update - PUT - findById based on id, then update and save.
app.put('/Patient/:id', (req, res) => {
    PatientModel.findById(req.params.id, function(err, Patient) {
        if(err) {
            res.status(400).send({
                code: 1236,
                message: 'There is an error finding item with matching id'
            });
        } else {           
            Patient.save(function(err, returnedPatient) {
                if(err) res.send({code: 123, message: 'Hallelujah', err:err})
                res.send(returnedPatient);
            })
        }
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`app running on port ${PORT}`)
});


module.export =app;
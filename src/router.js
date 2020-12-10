var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/";

//For Login
router.post('/',(req, res)=>{
    console.log('Posting data...')
    //console.log('Received : '+JSON.stringify(req.body));
    console.log('Name received : '+req.body.name);
    console.log('Id received : '+req.body.id);
    console.log('Password received : '+req.body.password);
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Login').collection('users');
        users.find({Name : req.body.name},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err){
                console.log('Error');
            }
            else if(obj.length === 0){
                res.send('Invalid');
            }
            else{
                if((obj[0].Username === req.body.id) && (obj[0].Password === req.body.password)){
                    res.send('Valid');
                }
                else
                {
                    res.send('Invalid');
                }
            }
        });
    });
});

router.get('/snh/chem',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var usersc = db.db('Books').collection('Chemistry');
        usersc.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

//Route for Engineering Chemistry
router.get('/snh/chem/ec',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('Chemistry');
        users.find({Course : 'Engineering Chemistry'},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

//Route for Physics
router.get('/snh/phy',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('Physics');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

//Route for Engineering Physics
router.get('/snh/phy/ep',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('Physics');
        users.find({Course : 'Engineering Physics'},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
            //console.log('Name : '+obj[0].Name);
            //console.log('Username : '+obj[0].Username);
            //console.log('Password : '+obj[0].Password);
        });
    });
});

//Route for Python
router.get('/snh/phy/python',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('Physics');
        users.find({Course : 'Introduction To Computing Using Phython'},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cse/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CSE_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
            //console.log(obj[0].Owner_Name);
        });
    });
});

router.get('/cse/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CSE_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cse/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CSE_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cse/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CSE_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/ece/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ECE_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/ece/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ECE_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/ece/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ECE_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/ece/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ECE_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/eee/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('EEE_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/eee/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('EEE_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/eee/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('EEE_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/eee/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('EEE_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/me/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ME_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/me/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ME_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/me/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('EEE_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/me/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('ME_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cv/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CV_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cv/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CV_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cv/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CV_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/cv/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('CV_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/bt/sem3',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('BT_SEM_3');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/bt/sem4',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('BT_SEM_4');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/bt/sem5',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('BT_SEM_5');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

router.get('/bt/sem6',(err, res)=>{
    //if(err) throw err;
    console.log('Starting...')
    MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
        if(err) throw err;
        var users = db.db('Books').collection('BT_SEM_6');
        users.find({},{projection:{_id : 0}}).toArray((err, obj)=>{
            if(err) throw err;
            res.send(obj);
        });
    });
});

module.exports = router;

//console.log('Port listening on : 8080');
//app.listen(8080);

/*MongoClient.connect(url,{useUnifiedTopology : true}, (err, db)=>{
    if(err) next(err);
    var users = db.db('Login').collection('users');
    users.find({Name : 'Aayansh', Username : 'CLG01', Password : 'Aay01'},{projection:{_id : 0}}).toArray((err, obj)=>{
        if(err){
            console.log('Error');
            return;
        }
        else if(obj.length === 0){
            console.log('Invalid Credentials');
        }
        //console.log(obj);
        else{
        //res.send(obj);
            console.log("Username : "+obj[0].Username);
        }
    });
});*/

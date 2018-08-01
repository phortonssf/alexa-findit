const { Pool, Client } = require('pg');
const Alexa = require('alexa-sdk');
const APP_ID = undefined;







exports.handler =  (event, context, callback) => {

 // DBConfig()
  //query()

	console.log(process.env.USER)
	//context.callbackWaitsForEmptyEventLoop = false;
	let pool = new Pool({
	  user: process.env.USER,	
	  host: process.env.URI,
	  database: process.env.DB,
	  password: process.env.PW,
	  port: process.env.PORT
	}) 
	
	const query = {
		name: 'fetch-room',
		text: 'SELECT roomname FROM rooms WHERE roomname = $1',
		       values: ['kitchen'],
		       rowmode: 'array'
	}
	
	pool.query(query, (err, res) => {
		  console.log(err, res)
		  pool.end()
		  callback(null, "hit")
	})

//*/


                 /*
		(async () => {

			  const { rows } = await pool.query('SELECT * FROM rooms', [1])
			  console.log('user:', rows)

		})().catch(e => setImmediate(() => { throw e }))
              */




}

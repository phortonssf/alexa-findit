const { Pool, Client } = require('pg');
const Alexa = require('alexa-sdk');
const APP_ID = undefined;

exports.handler = async (event, context, callback) => {
	//context.callbackWaitsForEmptyEventLoop = false;
	let pool = new Pool({
	  user: 'phortonssf',	
	  host: 'ifindit.c9r4w6m26fqi.us-west-2.rds.amazonaws.com',
	  database: 'dev',
	  password: 'Kylos99sql',
	  port: 5432
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




                 /*
		(async () => {

			  const { rows } = await pool.query('SELECT * FROM rooms', [1])
			  console.log('user:', rows)

		})().catch(e => setImmediate(() => { throw e }))
              */



}

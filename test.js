const { Pool, Client } = require('pg');

let foo = async function(event, context, callback) {
	
	const client = new Client({
	  user: 'phortonssf',
	  host: 'ifindit.c9r4w6m26fqi.us-west-2.rds.amazonaws.com',
	  database: 'dev',
	  password: 'Kylos99sql',
	  port: 5432
	})
	client.connect()
	
	
	const query = {
		name: 'fetch-room',
		text: 'SELECT roomname FROM rooms WHERE roomname = $1',
		       values: ['kitchen'],
		       rowmode: 'array'
	}
	
	
	
	
	client.query(query, (err, res) => {
		  console.log(err, res)
		  client.end()
	})
	

                 /*
		(async () => {

			  const { rows } = await pool.query('SELECT * FROM rooms', [1])
			  console.log('user:', rows)

		})().catch(e => setImmediate(() => { throw e }))
*/





}
foo();

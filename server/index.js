const GoogleAuth = require('google-auth-library');


const responseHeaders =  {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin',
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "PUT, POST, GET, OPTIONS, DELETE",
  "Access-Control-Max-Age": "3600"
}

const body = JSON.stringify({message: "Be sure to drink your Ovaltine"})

exports.handler = (event, context, callback) => {

  const auth = new GoogleAuth;
  const CLIENT_ID = "878735588022-m99vt5unaofu8rlos10kskbgl91vnmad.apps.googleusercontent.com"
  const client = new auth.OAuth2(CLIENT_ID);
  const token = event.headers.Authorization

  client.verifyIdToken(token, CLIENT_ID, (e, login) => {
    if (e) {
      callback(null, { statusCode: 401, body: JSON.stringify({message: "Unauthorized!"}) })
    } else {
      var payload = login.getPayload();
      var userid = payload['sub'];
      var domain = payload['hd'];
      console.log('\n\n', {payload: payload, userid: userid, domain: domain}, '\n\n');
      callback(null, { statusCode: 200, headers: responseHeaders, body: body })
    }
  })

}

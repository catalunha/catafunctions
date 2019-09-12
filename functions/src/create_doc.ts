// import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const docs = google.docs('v1');
// const sheets = google.sheets('v4');
// const drive = google.drive('v2');


export function criardoc(snapDoc: any) {

  const oAuth2Client = new OAuth2(
    "78194463780-c3nbobupmssbjfdngapmcdpv48eoa23l.apps.googleusercontent.com",
    "BC1eS_5qcrK3mnsZIz9tEoIR",
    "https://developers.google.com/oauthplayground"
  );
  oAuth2Client.setCredentials({
    refresh_token: "1/VR7BUkEUHKxRoJjnHWihA7o8xZJveNCFmn_A7wiP6eI"
  });

  return criarNovoDocument(oAuth2Client).then((data: any) => {
    console.log("Salvando dado do doc no firestore.")
  }).catch(err => {
    console.error('Error na função criarNovoDocument: ' + err.message);
    return 0;
  });;

}


export function criarNovoDocument(auth: any) {

  return new Promise((resolve, reject) => {
    docs.documents.create({
      auth: auth,
      title: "Doc teste",
    }, (err: any, res: any) => {
      if (err) {
        console.log('The API returned an error: ' + err);
      }
      else {
        console.log(`>> Novo doc criado no gdrive-> ID: ${res.data.documentId}`);
        resolve(res.data)
      }
    });
  });
}
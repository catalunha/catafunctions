import * as functions from 'firebase-functions';
import * as create_doc from './create_doc';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld2 = functions.https.onRequest((request, response) => {
 response.send("Hello Catalunha!");
});

export const createdoc = functions.firestore.document("documento/{documentoID}").onCreate(create_doc.criardoc);
 
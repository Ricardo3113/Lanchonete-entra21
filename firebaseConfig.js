const admin = require('firebase-admin');

// verificar se o endereço abaixo precisa ser alterado para a máquina do SENAI
const serviceAccount = require('C://Entra21/Node.JS/Projeto-Lanchonete/Lanchonete-entra21');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;

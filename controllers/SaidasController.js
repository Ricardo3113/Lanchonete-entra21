const db = require('../firebaseConfig');

const SaidasController = {
    /* A função " createEntrada " é usada para criar uma nova entrada de produto. 
    Primeiro, verifica se o produto existe usando seu ID. 
    Se o produto não existir, a função retorna um erro. 
    Caso contrário, ela cria uma nova entrada com as informações fornecidas no corpo da solicitação.*/

    createSaida: async (req, res) => {
        try {
            const produtoSnapshot = db.collection('produtos').doc(req.params.id);
            doc = await produtoSnapshot.get();           

            const saidaRef = db.collection('saidas').doc();
            await saidaRef.set(req.body);

            if (!doc.exists) {
                res.status(400).json({ message: 'Produto inválido' });
            }else{
                res.status(201).json({ id: saidaRef.id, ...req.body });
            }
               
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllSaidas: async (req, res) => {
        try {
            const SaidasSnapshot = await db.collection('saidas').get();
            const Saidas = [];
            SaidasSnapshot.forEach(doc => {
                Saidas.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(Saidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getSaidaById: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            const doc = await saidaRef.get();
            if (!doc.exists) {
                res.status(404).send('saida não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            await entradaRef.update(req.body);
            res.status(200).send('saida atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.delete();
            res.status(200).send('saida deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = SaidasController;


/*
const db = require('../firebaseConfig');

const EntradaController = {
    createEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc();
            await entradaRef.set(req.body);

            // const produtoRef = db.collection('produtos').doc(req.params.id);
            // doc = await produtoRef.get();
            // const nome = doc.data().nome_produto

            if(!doc.exists){
                res.status(404).json('Produto não encontrado!')
            }else{
                res.status(201).json({ idProduto: doc.id, nomeProduto: nome, id: entradaRef.id, ...req.body });
            }

            
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllEntradas: async (req, res) => {
        try {
            const entradasSnapshot = await db.collection('entradas').get();
            const entradas = [];
            entradasSnapshot.forEach(doc => {
                entradas.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(entradas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getEntradaById: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('Entrada não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.update(req.body);
            res.status(200).send('Entrada atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entrada').doc(req.params.id);
            await entradaRef.delete();
            res.status(200).send('Entrada deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = EntradaController;
*/
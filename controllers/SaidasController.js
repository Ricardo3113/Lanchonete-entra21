
const db = require('../firebaseConfig');

const SaidaController = {
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
            const saidasSnapshot = await db.collection('saidas').get();
            const saidas = [];
            saidasSnapshot.forEach(doc => {
                saidas.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(saidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getSaidaById: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            const doc = await saidaRef.get();
            if (!doc.exists) {
                res.status(404).send('saida não encontrada');
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
            await saidaRef.update(req.body);
            res.status(200).send('saida atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            await saidaRef.delete();
            res.status(200).send('saida deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = SaidaController;


/*

const db = require('../firebaseConfig');

const SaidaController = {
     A função " createEntrada " é usada para criar uma nova entrada de produto. 
    Primeiro, verifica se o produto existe usando seu ID. 
    Se o produto não existir, a função retorna um erro. 
    Caso contrário, ela cria uma nova entrada com as informações fornecidas no corpo da solicitação.

    createSaida: async (req, res) => {
        try {
            const produtoSnapshot = db.collection('produtos').doc(req.params.id);
            doc = await produtoSnapshot.get();

    
            REGRA PARA VERIFICAR INCLUSÃO DE MESMO ID
            // Verificar se já existe uma entrada com o mesmo ID
            const entradaExistente = await db.collection('entradas').doc(produtoId).get();

            if (entradaExistente.exists) {
                return res.status(400).json({ message: 'Já existe uma entrada com o mesmo ID' });
            }

            // Verificar se o produto associado ao ID existe
            const produtoSnapshot = await db.collection('produtos').doc(produtoId).get();

            if (!produtoSnapshot.exists) {
                return res.status(400).json({ message: 'Produto inválido' });
            }

    

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

    getEntradaById: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('entrada não encontrado');
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
            res.status(200).send('entrada atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.delete();
            res.status(200).send('entrada deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = SaidaController;

*/


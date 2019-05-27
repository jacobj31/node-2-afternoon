let messages = []
let id = 0


module.exports = {
    create: (req,res) => {
        const {text , time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let {id} = req.params
        let{text, time} = req.body

        let upMessage = {
            id,
            time,
            text
        }
        let messageInd = messages.findIndex(message =>
            +message.id === +id)
        
        messages.splice(messageInd, 1, upMessage)
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let {id} = req.params
        messInd = messages.findIndex(mess => +mess.id === +id)
        messages.splice(messInd, 1)

        res.status(200).send(messages)
    }
}
import dogdata from "../../../dogsapi"

// need to start code here

export default function handler(req, res) {

    const {id} = req.query

    const dog = dogdata.find(dog => dog.id === Number(id))

    console.log(dog)

    res.status(200).json(dog)
}
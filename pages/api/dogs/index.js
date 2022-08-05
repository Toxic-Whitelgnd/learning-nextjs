import dogdata from "../../../dogsapi"

// need to start code here

export default function handler(req, res) {
  res.status(200).json(dogdata)
}
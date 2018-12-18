var allMessages = []

const getAllMessages = (req, res, next) => {
  res.status(200).send(allMessages)
}
const createMessage = (req, res, next) => {
  var newMessage = {
    username: req.body.username,
    message: req.body.message
  }
  allMessages.push(newMessage)
  if (req.session.history) {
    req.session.history.push(newMessage)
  } else {
    req.session.history = []
    req.session.history.push(newMessage)
  }
  res.status(200).json(allMessages)
}
const history = (req, res, next) => {
  res.send(req.session.history)
}
module.exports = {
  getAllMessages,
  createMessage,
  history
}

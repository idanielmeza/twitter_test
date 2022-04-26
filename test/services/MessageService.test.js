const MessageService = require('./../../app/services/MessageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "Daniel", "Ledezma")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("Daniel")
    expect(message.receptor).toBe("Ledezma")
  })

})

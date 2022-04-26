const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "idanielmeza", "Daniel")
    expect(user.username).toBe("idanielmeza")
    expect(user.name).toBe("Daniel")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "idanielmeza", "Daniel")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("idanielmeza")
    expect(userInfoInList[2]).toBe("Daniel")
    expect(userInfoInList[3]).toBe("Sin bio")
  })

  test("3. Update username", () => {
    const user = UserService.create(1, "idanielmeza", "Daniel")
    UserService.updateUserUsername(user, "DanielM")
    expect(user.username).toBe("DanielM")
  })

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "idanielmeza1", "Daniel")
    const user2 = UserService.create(1, "idanielmeza2", "Daniel")
    const user3 = UserService.create(1, "idanielmeza3", "Daniel")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("idanielmeza1")
    expect(usernames).toContain("idanielmeza2")
    expect(usernames).toContain("idanielmeza3")
  })

})

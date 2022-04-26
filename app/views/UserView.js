const UserService = require('./../services/UserService')

class UserView{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
      return UserService.create(payload.id, payload.username, payload.name)
    } else{
      return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
    }
  }

  static getAllUsers(){
    /*
      Agrega la lógica para regresar todos los users
    */
    const user1 = UserService.create(1, "username1", "name 1")
    const user2 = UserService.create(2, "username2", "name 2")
    const user3 = UserService.create(3, "username3", "name 3")
    return [user1, user2, user3]
  }

  static getUserById(userId){
    /*
      Agrega la lógica para regresar un User dado un id
    */

    const user1 = UserService.create(1, "username1", "name 1")
    const user2 = UserService.create(2, "username2", "name 2")
    const user3 = UserService.create(3, "username3", "name 3")

    const users = [user1,user2,user3];

    const user = users.filter(u => u.id == userId)[0];

    return UserService.create(user.id, user.username, user.name)
  }

  static updateUserById(userId, params){
    
    let users = [
      {
        id: 1,
        username: 'prueba1',
        name: 'Nombre1'
      },
      {
        id: 2,
        username: 'prueba2',
        name: 'Nombre2'
      },
      {
        id: 3,
        username: 'prueba3',
        name: 'Nombre3'
      },
    ]

    users.forEach(user =>{
      if(user.id == userId){
        user.username = params.username;
        user.name= params.name
      }
    })

    return {message: "Updated"}
  }

  static deleteUser(userId){
    
    let users = [
      {
        id: 1,
        username: 'prueba1',
        name: 'Nombre1'
      },
      {
        id: 2,
        username: 'prueba2',
        name: 'Nombre2'
      },
      {
        id: 3,
        username: 'prueba3',
        name: 'Nombre3'
      },
    ]

    users = users.filter( user => user.id != userId);

    return {message: "Deleted"}
  }
}

module.exports = UserView

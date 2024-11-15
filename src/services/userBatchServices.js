const firestoreServices = require('./firestoreService')
const authServices = require('./authServices')

//handles removing user from lobby and deleting user from auth directory 
const batchUserEndChat = async(lobbyId, uid) => {
    try {
        await Promise.all([ //run both async functions concurrently
            firestoreServices.removeUserFromLobby(lobbyId, uid), 
            authServices.authDeleteUser(uid) 
        ])
    } catch(error) {
        throw new Error(`Error while ending chat for: lobby: ${lobbyId} for user ${uid}: ${error}`)
    }
} 

module.exports = {batchUserEndChat}
interface UserWallet {
    coins?: number,
    credits?: number
}

interface User {
    name: string,
    createdAt: Date,
    wallet?: UserWallet
}

function createUser(name: string): User {
    return {name, createdAt: new Date()}
}

function walletUpdate(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet }
}

const usuario = createUser("Murilo")

walletUpdate(usuario, { coins: 12})

interface Admin extends User {
    ban(user: User): void,
    kick(user: User): void
}

function promoteAdmin(user: User): Admin {
    return {...user,
        ban(userToBan) {
            console.log(userToBan, "foi banido por", this.name)
        },
        kick(userToKick){
            console.log(userToKick, "foi expulso por", this.name)
        }
    }
}



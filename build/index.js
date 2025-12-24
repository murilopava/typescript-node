function createUser(name) {
    return { name, createdAt: new Date() };
}
function walletUpdate(user, wallet) {
    user.wallet = { ...user.wallet, ...wallet };
}
const usuario = createUser("Murilo");
walletUpdate(usuario, { coins: 12 });
console.log(usuario);
export {};

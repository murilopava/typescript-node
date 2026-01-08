

export class Player {
    private static players: Player[] = [];
    public static getPlayers() {
        return this.players;
    }
    private name: string;
    private health: number;
    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        Player.players.push(this);
    }
    public getName() {
        return this.name;
    }
    public getHealth() {
        return this.health;
    }
    public damage(amount: number, damager?: Player) {
        const updatedHealth = this.health - amount;
        console.log(damager ? `${damager.getName()} deu ${amount} de dano em ${this.name}` : `${this.name} tomou ${amount} de dano` );

        if (updatedHealth <= 0) {
            this.health = 0;
            this.die();
            return
        }
    }
    private die(damager?: Player) {
        if (damager) {
            console.log(this.name, "foi morto por ", damager.getName());
        }
        console.log(this.name, "Morreu");
    }
}

const murilo = new Player("Murilo", 20);
const gusavo = new Player("Gustavo", 35);

console.log(Player.getPlayers());

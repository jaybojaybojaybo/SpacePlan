export class Asteroid {
    public Name: string;
    public Distance: number;
    public Velocity: number;
    public TimeLeft: number;
    constructor(
        public name: string,
        public distance: number, 
        public velocity: number, 
        public timeLeft: number){
            this.Name = name;
            this.Distance = distance;
            this.Velocity = velocity;
            this.timeLeft = timeLeft;
        }
}
export class BookTicket {
    constructor(
        public flightNo : string,
        public firstName: string,
        public lastName: string,
        public departureCity :string,
        public arrivalCity : string,
        public departureDate : string,
        public arrivalDate : string,
        public departureTime : string,
        public arrivalTime : string,
        public classType: string,
        public passengers: string,
        public totalFare : number
        
    ) {}
}
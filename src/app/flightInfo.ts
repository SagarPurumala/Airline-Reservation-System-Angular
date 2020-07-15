export class FlightInfo {
    constructor(
        public flightNumber : string,
        public departureCity :string,
        public arrivalCity : string,
        public airline : string,
        public departureDate : string,
        public arrivalDate : string,
        public departureTime : string,
        public arrivalTime : string,
        public firstClassSeats : number,
        public firstClassSeatFare : number,
        public bussinessClassSeats : number,
        public bussinessClassFare : number,
        public pk?: string
    ) {}
}
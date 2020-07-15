export class ProfileInfo {
    constructor(
        public flightNo: string,
        public departureCity: string,
        public arrivalCity: string,
        public departureDate: string,
        public arrivalDate: string,
        public departureTime: string,
        public arrivalTime: string,
        public bookingId: string,
        public userId: string,
        public firstName: string,
        public lastName: string,
        public classType: string,
        public passengers: number,
        public totalFare: number,

    ) { }
}
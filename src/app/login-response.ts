export class LoginResponse {
    constructor(
        public loginId: string,
        public refreshToken: string,
        public registered: boolean,
        public localId: string
    ) {}
}
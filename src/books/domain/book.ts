export class Book {
    constructor(
        public uuid: string,
        public title: string,
        public author: string,
        public description: string,
        public uniteCode: string,
        public status: boolean,
        public loan: boolean,
    ) { }

}
export class Book {
    constructor(
        public uuid: string,
        public title: string,
        public author: string,
        public description: string,
        public uniteCode: string,
        public status: string,
        public loan: string,
    ) { }

}
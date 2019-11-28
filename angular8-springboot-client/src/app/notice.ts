export class Notice {
    id: number;
    title: string;
    description: string;
    publishedOn: Date;
    viewedOn: Date;

    constructor() {
        this.publishedOn = new Date(); // Date of model creation
    }

}
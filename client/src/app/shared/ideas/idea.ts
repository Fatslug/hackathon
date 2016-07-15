/* tslint:disable:no-string-literal */

export interface IdeaInterface {
    $key?: string;
    timestamp: number;
    userID: string;
    title: string;
    description: string;
    province: string;
    brokerage: string;
}

export class Idea implements IdeaInterface {
    timestamp: number = firebase.database['ServerValue']['TIMESTAMP'];
    userID: string;
    title: string;
    description: string;
    province: string;
    brokerage: string;

    constructor(userID: string, title: string, description: string, province: string, brokerage: string) {
        this.userID = userID;
        this.title = title;
        this.description = description;
        this.province = province;
        this.brokerage = brokerage;
    }
}



export interface IUser {
    ldap: string
    name: string
}

export class User {
    ldap: string
    name: string

    constructor(user: IUser){
        this.ldap = user.ldap
        this.name = user.name
    }
}
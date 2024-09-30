

export class Step {
    public key!: string
    public path!: string
    public isCurrent!: boolean

    constructor(key: string, path: string, isCurrent: boolean){
        this.key = key
        this.path = path
        this.isCurrent = isCurrent
    }
}


export class TableHeader {
    public caption!: string
    public dataFieldExpr!: string
    public sortFieldExpr!: string
    public allowSorting!: boolean
    public sortOrder!: string | null


    constructor(caption: string, dataFieldExpr: string, allowSorting: boolean, sortFieldExpr: string){
        this.caption = caption
        this.dataFieldExpr = dataFieldExpr
        this.allowSorting = allowSorting
        this.sortFieldExpr = sortFieldExpr
        this.sortOrder = null
    }
}

export class TagItem {
    id: string
    label: string
    type: string
    value: boolean
    default: boolean
    saturation: number
    
    constructor(id: string, label: string, type: string, value?: boolean, def?: boolean, saturation?: number){
        this.id = id
        this.label = label
        this.type = type
        this.value = value ?? false
        this.default = def ?? false
        this.saturation = saturation ?? 0
    }
}
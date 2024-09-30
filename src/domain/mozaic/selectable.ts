

export class Selectable {
    public value!: number | string
    public text!: string

    constructor(value: number | string, text: string){
        this.value = value
        this.text = text
    }
}

export class SearchSelectable {
    public id!: number | string
    public value!: number | string | boolean | null
    public label!: string

    constructor(id: number | string, value: number | string | boolean | null, label: string){
        this.id = id
        this.value = value
        this.label = label
    }
}

export class GroupSelectable {
    public id!: number | string
    public value!: number | string | boolean | null
    public label!: string
    public group!: string

    constructor(id: number | string, value: number | string | boolean | null, label: string, group: string){
        this.id = id
        this.value = value
        this.label = label
        this.group = group
    }
}

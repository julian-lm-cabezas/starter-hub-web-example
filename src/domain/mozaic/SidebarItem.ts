
export class SidebarItem {
    label: string
    code: string
    disabled: boolean
    icon?: string
    href?: string
    items?: Array<SidebarItem>

    constructor(code: string, label: string, icon?: string, href?: string, items?: Array<SidebarItem>, disabled?: boolean){
        this.code = code
        this.label = label
        this.icon = icon
        this.href = href
        this.items = items
        this.disabled = disabled ?? false
    }
    
}
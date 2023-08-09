import FullList from "../model/FullList";

interface DOMList {
    ui:HTMLUListElement,
    clear(): void,
    render(fullList:FullList):void,
}

export default class ListTemplate implements DOMList {
    static instance:ListTemplate = new ListTemplate(); 
    
    private constructor( private _ui: HTMLUListElement = document.getElementById("listItems") as HTMLUListElement){

    }
    
    get ui():HTMLUListElement{
        return this._ui
    }

    set ui(ui:HTMLUListElement){
        this._ui =ui
    }
    

    
    clear(): void {
        this._ui.innerHTML ='';
    }

    render(fullList: FullList): void {
        fullList.list.forEach(
            (e)=>{
                const listItem = document.createElement('li') as HTMLLIElement
                listItem.className = "item"

                const check = document.createElement("input") as HTMLInputElement
                check.type ="checkbox"
                check.id=e.id
                check.tabIndex = 0
                check.checked = e.checked
                check.addEventListener('change',()=>{
                    e.checked = !e.checked
                    fullList.save()
                })
                listItem.append(check)

                const label = document.createElement("label") as HTMLLabelElement
                label.htmlFor = e.id
                label.textContent = e.item
                listItem.append(label)

                const delButton = document.createElement("button") as HTMLButtonElement

                delButton.className = 'button'
                delButton.textContent = 'X'
                delButton.addEventListener('click',()=>{
                    fullList.removeItem(e.id)
                    this.render(fullList)
                })
                listItem.append(delButton)
                this._ui.append(listItem)
                 
            }
        )
        
    }
    
}
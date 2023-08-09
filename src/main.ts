import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'
import { v4 as uuid } from 'uuid';

const initApp =():void =>{

    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;

    itemEntryForm.addEventListener('submit',(event:SubmitEvent):void=>{
        event.preventDefault();
        const input = document.getElementById('newItem') as HTMLInputElement;

        const newEntryText:string = input.value.trim();

        if(!newEntryText) return 

        const itemId = uuid();
        const item = new ListItem(itemId,newEntryText);
        fullList.addItem(item);
        fullList.save()
        template.clear()
        template.render(fullList)


    });

    const clearItems =  document.getElementById("clearItemButton") as HTMLButtonElement;

    clearItems.addEventListener('click',():void=>{
        fullList.clearList();
        template.clear();
    })
    fullList.load()
    template.render(fullList)
}

document.addEventListener('DOMContentLoaded',initApp)
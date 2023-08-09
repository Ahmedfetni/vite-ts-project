import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/listTemplate'

const initApp =():void =>{

    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById("itemEnteryForm") as HTMLFormElement;

    itemEntryForm.addEventListener('submit',(event:SubmitEvent):void=>{
        event.preventDefault();
        //TODO
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
var Title = document.getElementById('Title');
var List = document.getElementById('List-To-Dos');
var i=1;

var list = document.createElement('ul');
var historyContain = document.getElementById('History')

function Create(){
    if(Title.value==''){

    }else{
    let div = document.createElement('aside')
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignitems = 'center';
    div.style.flexDirection = 'row';
    div.setAttribute('id',`${'item'+i}`);    
    let listitem = document.createElement('li');
    listitem.textContent = Title.value;
    listitem.setAttribute('id',`${i}`)
    i++;
    listitem.addEventListener('click', function(){
        Done(this.id);
    })

    let butt = document.createElement('button')
    butt.textContent = 'X';
    butt.addEventListener('click', function(){
        Delete(this.parentElement.id);
    })

    List.appendChild(list);
    list.appendChild(div);
    div.appendChild(listitem);
    div.appendChild(butt);
    Title.value = "";
    }

    var items = List.innerHTML;
    console.log(List.innerHTML);
    console.log(items);
    localStorage.setItem('ToDo',items);
}

function Done(id){
    let x = document.getElementById(id);
    x.classList.toggle('Done');

}

function Delete(id){
    let x = document.getElementById(id)
    list.removeChild(x);
}

window.onload = function(){    
    historyContain.innerHTML = localStorage.getItem('ToDo')
    var listStuff = historyContain.querySelectorAll('li');

    listStuff.forEach(function(item){
        item.addEventListener('click',function(){
            Done(this.id);
        })

        var listbutton = item.nextElementSibling;
        listbutton.addEventListener('click',function(){
            DeleteFromHistory(this.parentElement.id);
        })
    })


}


function DeleteFromHistory(x){
    let y = document.getElementById(x);
    let parent = y.parentElement;
    parent.removeChild(y);
}
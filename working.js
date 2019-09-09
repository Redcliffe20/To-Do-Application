// alert('Its working')

// create text node
// var h=document.createElement('h1')
// var myValue=document.createTextNode('Hello World')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

// while(a<10)
// {
//     console.log('Hello')
//     a=a+1;
// }

var ul =document.getElementById('list');
var li;

var addTodo = document.getElementById('add');
addTodo.addEventListener('click',addItem)

var removeTodo =document.getElementById('remove');
removeTodo.addEventListener('click',removeItem)

var rallTodo =document.getElementById('rall');
rallTodo.addEventListener('click',removeAll)

function addItem()
{
    //console.log('Add button clicked');
    var input=document.getElementById('input')
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item)

    if(item==='')
    {
        return false
        // Add a p tag and assign a valur Enter your Todo
    }
    else{
        // create li
        li=document.createElement('li')

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        // create label
        var label=document.createElement('label');
        // label.setAttribute('for','item')  OPOTIONAL

        // Add these Elements on WebPage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])

        setTimeout(() => {
            li.className='visual';
        }, 1);
        
        input.value=''
    }
}

function removeAll()
{
    li=ul.children;
    var i=0;
    while(li.length>0){
        ul.removeChild(li[i]);
    }
}

function removeItem()
{
    //console.log('Delete button clicked');
    li=ul.children;
    //console.log(li)
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element)
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index])
        }
        
    }
}
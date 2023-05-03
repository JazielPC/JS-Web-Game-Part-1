
/*I will work on refactoring code using functions and parameters. 
The goal is to create a new function that will get rid of repetive code*/

function newImage(src, left, bottom){
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    document.body.append(image);
};

newImage('assets/red-character.gif',300,500)
newImage('assets/green-character.gif',100,100);
newImage('assets/pine-tree.png',450,200);
newImage('assets/tree.png',200,300);
newImage('assets/pillar.png',350,100);
newImage('assets/crate.png',150,200);
newImage('assets/well.png',500,425);




function newItem(src,left,bottom){
    let item = document.createElement('img')
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = left + 'px';
    item.style.bottom = bottom + 'px'
    document.body.append(item);

    item.addEventListener('dblclick',function(){
        item.remove()
    });
};

newItem('assets/sword.png',500,405);
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)



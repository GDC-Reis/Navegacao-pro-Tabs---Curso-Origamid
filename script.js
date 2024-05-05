const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo'); // Inicia sempre o item do index 0 como ativo

    function activeTab(index) {
        tabContent.forEach((section) => {
        section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }


    // itemMenu -> É exatamente o item quando o loop estiver sendo iniciado.
    // index -> É o index do item do loop [0,1,2...].
    tabMenu.forEach((itemMenu, index) => {
        //     // () -> Inicia a função, não declarando ela como uma função normal, sendo assim já inciando ela após o click.
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
    });
    
}

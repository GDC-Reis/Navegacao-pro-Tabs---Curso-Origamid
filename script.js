// Navegação por tabs
// Relação 1 para 1
// Relacioada com duas listas de itens, sendo uma delas (a primeira delas) uma lista de navegação.
// Sendo que ao clicar nela ativa o item.

// Tabs -> Lista de navegação (Lista de imagens dos animais)

// Relação entre - Clica na imagem adiciona uma classe no texto referente a imagem.


const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo'); // Inicia o item de index [0] sempre como ativo
    
    function activeTab(index) {
        tabContent.forEach((section) => { // Loop para cada "section"
        section.classList.remove('ativo'); // Limpa todos os "section" que estiverem ativos
        });
        tabContent[index].classList.add('ativo'); // Adiciona a classe "ativo" para o elemento
    }


    // itemMenu -> É exatamente o item quando o loop estiver sendo iniciado.
    // index -> É o index do item do loop [0,1,2...].
    tabMenu.forEach((itemMenu, index) => {
        // () -> Inicia a função, não declarando ela como uma função normal, sendo assim já inciando ela após o click.
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
    });
    
}
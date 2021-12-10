const $ul = document.querySelector('.ul');
const $query = document.querySelector('.input');

let list = ['Crash Bandicoot', 'Dark Souls', 'Resident Evil', 'Assassin`s Creed', 'Red Dead Redemption', 'GTA', 'Final Fantasy', 'TES', 'Dishonored', 'Bioshock', 'Batman'];
listGenerator(list);

function listGenerator(list) {
    if(!list.length) {
        $ul.innerHTML = '<li style = "list-style: none;">Not Found</li>'
    }
    else {
        let template = '';
        for (let i = 0; i < list.length; i++) {
            template += '<li data-index=' + i + '>' + list[i] + '</li>';
        }
        $ul.innerHTML = template;
    }
}

$query.addEventListener('input', function () {
    let value = this.value.toLowerCase();

    let buffer = list.filter(function (elem) {
        return ~elem.toLowerCase().indexOf(value);
    })

    listGenerator(buffer);
})
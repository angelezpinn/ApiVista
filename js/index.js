window.onload = function() {
    var cards = ['users', 'clients', 'products', 'sessions','categories','directions','genders','sessionsProducts',];

    var cardContainer = document.getElementById('cardContainer');

    var menu = document.querySelector('.menu');

    cards.forEach(function(cardName) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');

        var cardTitle = document.createElement('h2');
        cardTitle.textContent = toTitleCase(cardName);
        cardElement.appendChild(cardTitle);

        var loremIpsum = document.createElement('p');
        loremIpsum.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae metus euismod, rhoncus metus eu, vulputate odio. Cras ac efficitur eros. Sed ultrices euismod dolor, ac pharetra odio lacinia sed.';
        cardElement.appendChild(loremIpsum);

        var button = document.createElement('button');
        button.textContent = 'Ir a ' + cardName;
        button.addEventListener('click', function() {
            window.location.href = cardName + '.html';
        });
        cardElement.appendChild(button);

        cardContainer.appendChild(cardElement);
    });
};

function toTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
let language = prompt('Какой язык использует клиент?');

switch(true) {
    case language === 'EN': 
        console.log('Hello my friend!');
        break;
    case language === 'DE':
        console.log('Gutten tag');
        break;
    case language === 'RU':
        console.log('Привет');
        break;
    default: 
        console.log('Я не знаю такого языка');
}
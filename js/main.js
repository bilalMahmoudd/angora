var arrayOfQuotes = [
    {
        quote: '“Beware of what you become in pursuit of what you want.”',
        author: '-- Jim Rohn'
    },
    {
        quote: '“It\'s not what happens to you, but how you react to it that matters.”',
        author: '--Epictetus'
    },
    {
        quote: '“The best revenge is massive success.”',
        author: '-- Frank Sinatra',
    },
    {
        quote: '“You miss 100% of the shots you don\'t take.”',
        author: '-- Wayne Gretzy',
    },
    {
        quote: '“Resentment is like drinking poison and waiting for your enemies to die.”',
        author: '-- Nelson Mandela',
    },
    {
        quote: '“Do not take life too seriously. You will not get out alive.”',
        author: '-- Elbert Hubbard',
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”" ,
        author: "-- Mae West "
    },
    {
        quote: "“Be the change that you wish to see in the world.” " ,
        author: "-- Mahatma Gandhi "
    }
];



function newquote() {

    var random = Number(Math.floor(Math.random() * arrayOfQuotes.length));
    document.getElementById("quots").innerHTML =  arrayOfQuotes[random].quote 
    document.getElementById("author").innerHTML =arrayOfQuotes[random].author
}

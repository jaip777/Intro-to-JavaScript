var books = [ //array for the 3 books
    {
        title: "Belgariad",
        author: "David Eddings",
        color: color(104, 211, 217),
        recommend: true
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        color: color(0, 255, 21),
        recommend: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R.T.",
        color: color(255, 191, 0),
        recommend: true
    }
    ];

var numBooks = books.length/3; //number of books / 3 = 1

for (var count = 0; count < numBooks; count++){ //for loops to display books
    for (var i = (3 * count); i < 3 * count + 3; i++){
        
    fill(books[i].color);
    rect(137 * (i - 3 * count) + 12, 114 * count + 23, 106, 107);

    fill(0, 0, 0); //color of the text on the book
    text(books[i].title, 139 * (i - 3 * count) + 27, 120 * count + 36, 108, 100);
    // Writes "by" and then the author of the book
    text("By: " +books[i].author, 138 * (i - 3 * count) + 17, 105 * count + 97, 100, 100);
        
    }   
}

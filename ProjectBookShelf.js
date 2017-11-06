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
    fill (94, 74, 10);
rect (4,129,394,24);
rect (34,152,336,249);
var numBooks = books.length/3; //number of books / 3 = 1

for (var counting = 0; counting < numBooks; counting++){ //for loops to display books
    for (var i = (3 * counting); i < 3 * counting + 3; i++){
         
    fill(books[i].color);
    rect(137 * (i - 3 * counting) + 12, 114 * counting + 23, 106, 107);

    fill(0, 0, 0); //color of the text on the book
    text(books[i].title, 139 * (i - 3 * counting) + 27, 120 * counting + 36, 108, 100);
    // Writes "by" and then the author of the book
    text("By: " +books[i].author, 138 * (i - 3 * counting) + 17, 105 * counting + 97, 100, 100);
    // If I recommended the book, and boolean is true
    if (books[i].recommend === true){
            text("Great Book!", 139 * (i - 3 * counting) + 15, 86 * counting + 75, 87, 106);
        }
    }
}

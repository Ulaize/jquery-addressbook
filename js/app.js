var displayFunctions = require('./lib/display');
// Add foundation dynamic functionality on page
$(document).foundation();

// <<<<<<< HEAD
// // Set the API base url
// var API_URL = "https://loopback-rest-api-demo-ziad-saab.c9.io/api";

// // Get a reference to the <div id="app">. This is where we will output our stuff
// var $app = $('#app');



// // Data retrieval functions
// function getAddressBooks(skip) {
//     return $.getJSON(API_URL + '/AddressBooks?filter={"order":"name%20ASC","limit":5,"skip":' + (skip * 5) + '}');
// }

// function getAddressBook(id) {
//     return $.getJSON(API_URL + '/AddressBooks/' + id);
// }

// function getEntries(addressBookId, skip) {
//     return $.getJSON(API_URL + '/AddressBooks/' + addressBookId + '/entries?filter={"order":"lastname%20ASC","limit":2, "skip":' + (skip * 2) + '}');
// }

// function getEntry(entryId) {
//     return $.getJSON(API_URL + '/Entries/' + entryId);
// }
// // End data retrieval functions

// // Functions that display things on the screen (views)
// function displayAddressBooksList(pageNum) {
//     getAddressBooks(pageNum).then(
//         function(addressBooks) {
            
//             $app.html(''); // Clear the #app div
//             $app.append('<h2>Address Books List</h2>');
//             $app.append('<ul>');
//             addressBooks.forEach(function(ab) {
//                 $app.find('ul').append('<li data-id="' + ab.id + '">' + ab.name + '</li>');
//             });
            
//             $app.find('li').on('click', function() {
//                 var addressBookId = $(this).data('id');
//                 console.log(addressBookId);
//                 displayAddressBook(addressBookId,0);
//             });
//             var previousPage = $('<button>previous page</button>');
//             var nextPage = $('<button>next page</button>');
//             $app.append(previousPage);
//             $app.append(nextPage);
            
//             nextPage.on('click', function() {
//                 displayAddressBooksList(pageNum + 1);
//             });
//             previousPage.on('click', function() {
//                 displayAddressBooksList(pageNum - 1);
// // >>>>>>> ula/master
//             });
            
//         }
//     );
// }

// function displayAddressBook(addressBookId,pageNum) {
//     getEntries(addressBookId, pageNum).then(
//         function(entries) {
//             $app.html('');
//             $app.append('<h2>Address Books Entries</h2>');
//             $app.append('<ul>');
//             entries.forEach(function(entry){
//                 $app.find('ul').append('<li data-id="' + entry.id + '">' + entry.lastName + ", " + entry.firstName +'</li>');
//             });
            
//             $app.find('li').on('click', function() {
//                 var entryId = $(this).data('id');
//                 displayEntry(entryId);
//             });
            
//             var previousPage = $('<button>previous page</button>');
//             var nextPage = $('<button>next page</button>');
//             $app.append(previousPage);
//             $app.append(nextPage);
            
//             nextPage.on('click', function() {
//                 displayAddressBook(addressBookId,pageNum + 1);
//             });
//             previousPage.on('click', function() {
//                 displayAddressBook(addressBookId,pageNum - 1);
//             });
            
//         }
//     );
// }

// function displayEntry() {
    
// }
// // End functions that display views


// // Start the app by displaying all the addressbooks

// displayAddressBooksList(0);
// =======
// Start the app by displaying all the addressbooks
displayFunctions.displayAddressBooksList(0);

// >>>>>>> ula/master

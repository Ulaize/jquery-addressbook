// Add foundation dynamic functionality on page
$(document).foundation();

// Set the API base url
var API_URL = "https://loopback-rest-api-demo-ziad-saab.c9.io/api";

// Get a reference to the <div id="app">. This is where we will output our stuff
var $app = $('#app');



// Data retrieval functions
function getAddressBooks(skip) {
    return $.getJSON(API_URL + '/AddressBooks?filter={"order":"name%20ASC","limit":5,"skip":' + (skip * 5) + '}');
}

function getAddressBook(id) {
    return $.getJSON(API_URL + '/AddressBooks/' + id);
}

function getEntries(addressBookId, skip) {
    return $.getJSON(API_URL + '/AddressBooks/' + addressBookId + '/entries?filter={"order":"lastname%20ASC","limit":5, "skip":' + (skip * 5) + '}');
}

function getEntry(entryId) {
    return $.getJSON(API_URL + '/Entries/' + entryId);
}

function getAddresses(entryId) {
   return $.getJSON(API_URL + '/Entries/' + entryId + '/addresses');
}

function getEmails(entryId) {
   return $.getJSON(API_URL + '/Entries/' + entryId + '/emails');
}

function getPhones(entryId) {
   return $.getJSON(API_URL + '/Entries/' + entryId + '/phones');
}
// End data retrieval functions

// Functions that display things on the screen (views)
function displayAddressBooksList(pageNum) {
    getAddressBooks(pageNum).then(
        function(addressBooks) {
            
            $app.html(''); // Clear the #app div
            $app.append('<h2>Address Books List</h2>');
            $app.append('<ul>');
            
            addressBooks.forEach(function(ab) {
                $app.find('ul').append('<li data-id="' + ab.id + '">' + ab.name + '</li>');
            });
            
            $app.find('li').on('click', function() {
                var addressBookId = $(this).data('id');
                console.log(addressBookId);
                displayAddressBook(addressBookId,0);
            });
            
            var previousPage = $('<button>previous page</button>');
            var nextPage = $('<button>next page</button>');
            $app.append(previousPage);
            $app.append(nextPage);
            
            if(pageNum === 0){
                previousPage.toggleClass("disabled");
            }
            
            // if(pageNum === //addressBook.length){ //I need to figure out how to calculate the last page number.
            //     var nextPage = $('<button disable>previous page</button>');
            // }
            
            nextPage.on('click', function() {
                displayAddressBooksList(pageNum + 1);
            })
            previousPage.on('click', function() {
                displayAddressBooksList(pageNum - 1);
            })
            
        }
    );
}

function displayAddressBook(addressBookId,pageNum) {
    getEntries(addressBookId, pageNum).then(
        function(entries) {
            $app.html('');
            var previousStep = $('<button><--</button>');
            $app.append(previousStep);
            previousStep.on('click', function() {
                displayAddressBooksList(0);
            })
            $app.append('<h2>Address Books Entries</h2>');
            $app.append('<ul>');
            entries.forEach(function(entry){
                $app.find('ul').append('<li data-id="' + entry.id + '">' + entry.lastName + ", " + entry.firstName +'</li>');
            });
            
            $app.find('li').on('click', function() {
                var entryId = $(this).data('id');
                displayEntry(entryId);
            });
            
            var previousPage = $('<button>previous page</button>');
            var nextPage = $('<button>next page</button>');
            $app.append(previousPage);
            $app.append(nextPage);
            
            nextPage.on('click', function() {
                displayAddressBook(addressBookId,pageNum + 1);
            })
            previousPage.on('click', function() {
                displayAddressBook(addressBookId,pageNum - 1);
            })
            
        }
    )
}

function displayEntry(EntryId) {
    var $table = $('<table></table>');
    getEntry(EntryId).then(
        function(entry){

            $app.html('');
            $app.append('<h2>Entry</h2>');
            
            $table.append('<tr><th>First Name</th><td>' + entry.firstName + '</td></tr>');
            $table.append('<tr><th>Last Name</th><td>' + entry.lastName + '</td></tr>');
            $table.append('<tr><th>Birthday</th><td>' + entry.birthday + '</td></tr>');
            $app.append($table);
            console.log(entry.birthday)
        });
        
    getAddresses(EntryId).then(
        function(addresses){
            $table.append('<tr><th>Address</th><td>' + addresses.line1 + addresses.line2 + '</td></tr>');
            $table.append('<tr><th>City</th><td>' + addresses.city + '</td></tr>');
            $table.append('<tr><th>State</th><td>' + addresses.state + '</td></tr>');
            $table.append('<tr><th>Zip</th><td>' + addresses.zip + '</td></tr>');
            $table.append('<tr><th>Country</th><td>' + addresses.country + '</td></tr>');
            $app.append($table);
            console.log(addresses.zip)
        });
        
    getEmails(EntryId).then(
        function(emails){
            $table.append('<tr><th>Email Type</th><td>' + emails.type + '</td></tr>');
            $table.append('<tr><th>Email</th><td>' + emails.email + '</td></tr>');
            $app.append($table);   
        });
        
    getPhones(EntryId).then(
        function(phones){
            $table.append('<tr><th>Phone Type</th><td>' + phones.phoneType + '</td></tr>');
            $table.append('<tr><th>Type</th><td>' + phones.type + '</td></tr>');
            $table.append('<tr><th>Phone number</th><td>' + phones.phoneNumber + '</td></tr>');
        });
}
// End functions that display views


// Start the app by displaying all the addressbooks
displayAddressBooksList(0);


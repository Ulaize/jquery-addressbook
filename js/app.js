var displayFunctions = require('./lib/display');
var Backbone = require('backbone');
// Add foundation dynamic functionality on page
$(document).foundation();

var listingNb = 5;

var router = Backbone.Router.extend({
    routes: {
        '""(page:pageNum)': 'showAddressBooks',
        'addressbooks/:id(/page:pageNum)': 'showAddressBook',
        'addressbooks/:id1(/page:pageNum)/entry/:id2': 'showEntry'
    },
    showAddressBooks: function(pageNum) {
        if (pageNum) {
            displayFunctions.displayAddressBooksList(pageNum, listingNb);
        }
        else {
            displayFunctions.displayAddressBooksList(0, listingNb);
        }
    },
    showAddressBook: function(id, pageNum) {
        if (pageNum) {
            displayFunctions.displayAddressBook(id, pageNum, listingNb);
        }
        else {
            displayFunctions.displayAddressBook(id, 0, listingNb);
        }
        
    },
    showEntry: function(id1, id2, listingNb, pageNum) {
        if (pageNum) {
            displayFunctions.displayEntry(id2, pageNum, listingNb, id1);
        }
        else {
            displayFunctions.displayEntry(id2, 0, listingNb, id1);
        }
    }
});

var thisRouter = new router;
Backbone.history.start();

// Start the app by displaying all the addressbooks
// 

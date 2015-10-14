var displayFunctions = require('./lib/display');
var Backbone = require('backbone');
// Add foundation dynamic functionality on page
$(document).foundation();

var router = Backbone.Router.extend({
    routes: {
        '': 'displayList',
        'addressbooks(/page:pageNum)': 'showAddressBooks',
        'addressbooks/:id(/page:pageNum)': 'showAddressBook',
        'entry/:id': 'showEntry'
    },
    displayList: displayFunctions.displayAddressBooksList(0, 5),
    showAddressBooks: displayFunctions.displayAddressBooksList,
    showAddressBook: displayFunctions.displayAddressBook,
    showEntry: displayFunctions.displayEntry
});

var thisRouter = new router;
Backbone.history.start();

// Start the app by displaying all the addressbooks
// 

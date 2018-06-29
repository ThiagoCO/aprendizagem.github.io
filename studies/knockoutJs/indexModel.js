// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

    var arrayObservable = ko.observableArray([
        {name:"Introduction to Data Types"},
        {name:"List and Collections"},
        {name:"Custom Bindings"},
        {name:"Loading and saving data"}
    ]);


    for(var i=0;i< arrayObservable().length;i++){
        console.log(arrayObservable()[i]);
    }   


    this.menu1 =  ko.observable("Data Bind Pokedex");
    this.menu2 =  ko.observable("Animating Knockout");
    this.menu3 =  ko.observable("Udemy 1");
    this.menu4 =  ko.observable("Udemy 2");
    this.menu5 =  ko.observable("Udemy 3");
    this.menu6 =  ko.observable("...");
    this.menu7 =  ko.observable("...");
    
    this.fullMenu = ko.computed(function(){
        return 230;
    }, this);

    
    console.log(this.menu1());

}
// Activates knockout.js
ko.applyBindings(new AppViewModel());
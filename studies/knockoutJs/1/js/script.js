function updateName(){
  var pokeName        = $("#name").val();
  var pokeNameOutput  = $("#poke-name").text(pokeName);

}


function updateDescription(){
  var pokeDescription        = $("#address").val();
  var pokeDescriptionOutput  = $("#poke-description").text(pokeDescription);
}


function updatePokePhoto(){
  var pokePhoto = $("#poke-photo");
  var pokeId    = $("#tel").val();
  
  pokePhoto.attr("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokeId + ".png");
}


(function ($) {
  
  var model = [ 
  { name: "bulbasaur",  address: "leaf type, bulbasaur is a nice pokemon",  tel: "001",  site: "https://www.pokemon.com/br/pokedex/", pic: "/img/john.jpg",  deleteMe: function () { viewModel.people.remove(this); } }, 
  { name: "charmander",  address: "charmander is a draconic fire element",  tel: "004",  site: "https://www.pokemon.com/br/pokedex/",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); } },
  { name: "pikachu",  address: "pikachu is a electric pokemon",  tel: "025",  site: "https://www.pokemon.com/br/pokedex/",  pic: "/img/fred.jpg",  deleteMe: function () { viewModel.people.remove(this); } },
  { name: "squirtle",  address: "from squirtle squad !",  tel: "007",  site: "https://www.pokemon.com/br/pokedex/",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); } }

  ], viewModel = {
    
    
    people: ko.observableArray(model),
    // Form

    displayButton: ko.observable(true), displayForm: ko.observable(true), showForm: function () { viewModel.displayForm(true).displayButton(false);
    }, hideForm: function () { viewModel.displayForm(false).closeButton(true);
    }, addPokemon: function () { viewModel.displayForm(true).displayButton(true).people.push({ name: $("#name").val(), address: $("#address").val(), tel: $("#tel").val(), site: $("#site").val(),pic: $("#pic").val(), deleteMe: function () { viewModel.people.remove(this); }
        });

        var jsonSend = ko.toJSON(viewModel.people);

        console.log(jsonSend);
    },
    


  filterLetter: ko.observable(""),
  filterTerm: ko.observable(""),
  clearLetter: function () {
    this.filterLetter("");
  },

  clearTerm: function () {
    this.filterTerm("");
    $("#term").val("");
  },

  setTerm: function () {
    this.filterTerm($("#term").val());
  }
  
  }; 
  

  viewModel.filteredPeopleByTerm = ko.dependentObservable(function () {
    var term = this.filterTerm().toLowerCase();
     
    if (!term) {
        return this.people();
    }
     
    return ko.utils.arrayFilter(this.people(), function (person) {
        var found = false;
     
        for (var prop in person) {
            if (typeof (person[prop]) === "string") {
                if (person[prop].toLowerCase().search(term) !== -1) {
                    found = true;
                    break;
                }
            }
        }
     
        return found;
    });
     
    }, viewModel);

    viewModel.letters = ko.dependentObservable(function () {
      var result = [];
       
      ko.utils.arrayForEach(this.filteredPeopleByTerm(), function (person) {
          result.push(person.name.charAt(0).toUpperCase());
      });
       
      return ko.utils.arrayGetDistinctValues(result.sort());
      }, viewModel);

      viewModel.filteredPeople = ko.dependentObservable(function () {
        var letter = this.filterLetter();
        if (!letter) {
            return this.filteredPeopleByTerm();
        }
     
        return ko.utils.arrayFilter(this.filteredPeopleByTerm(), function (person) {
            return person.name.charAt(0).toUpperCase() === letter;
        });
    }, viewModel);
  
    
  ko.applyBindings(viewModel);


  
})(jQuery);


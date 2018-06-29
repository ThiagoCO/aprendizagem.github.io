var myViewModel = {
    htmlTest: ko.observable(),
    htmlTest2: ko.observable()
}

var self = myViewModel;

self.htmlTest("<h1>Teste htmlString</h1>");
self.htmlTest2("<h2>dfdfdf</h2>");


ko.applyBindings(myViewModel);
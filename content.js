var ScleraGCalendar = {
    replaceLinksWithPictures: function() {
        var re = new RegExp("sclera: (.*) \((.*)\)", "g");
        var grids = document.querySelectorAll('[role="gridcell"]');
        for (var g = 0; g < grids.length; g++) {
            var elements = grids[g].getElementsByTagName('span');
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var matches = element.innerText.match(re);
                if (matches !== null && matches.length === 1) {
                    var text = element.innerText.replace('(', '<img src="https://sclera.be/resources/pictos/');
                    text = text.replace(')', '" width="120" height="120" style="display:block;margin-top:2px;margin-bottom:4px;" />');
                    if (text !== element.innerText) {
                        element.innerHTML = text;
                        console.log('ScleraGCalendar replaced');
                    }
                }
            }
        }
        window.setTimeout(function() {
            ScleraGCalendar.replaceLinksWithPictures();
        }, 1000);
    }
};

ScleraGCalendar.replaceLinksWithPictures();

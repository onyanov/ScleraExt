var ScreraGCalendar = {

    init: function() {
        // http://sclera.be/en/picto/detail/23144
        // $('.picto-large').find('img').attr('src')
    }
};

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/sclera:[word or phrase to replace here]/gi, '[new word or phrase]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

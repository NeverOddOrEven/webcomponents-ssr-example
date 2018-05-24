'use strict';

function serialize(el) {
    if (el.nodeType === 3) return el.textContent;
    var name = String(el.nodeName).toLowerCase(),
        str = '<' + name,
        c, i;
    for (i = 0; i < el.attributes.length; i++) {
        str += ' ' + el.attributes[i].name + '="' + el.attributes[i].value + '"';
    }
    str += '>';
    for (i = 0; i < el.childNodes.length; i++) {
        c = serialize(el.childNodes[i]);
        if (c) str += '\n\t' + c.replace(/\n/g, '\n\t');
    }
    return str + (c ? '\n' : '') + '</' + name + '>';
}

function enc(s) {
    return s.replace(/[&'"<>]/g, function (a) { return `&#${a};` });
}

module.exports = {
    serialize
}

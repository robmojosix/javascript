// Composition pattern

// The Composite pattern allows for objects to be primivive
// or nested with other objects all with a similar interface.
// The interface supports single objects or nested.
// Good for recursion and looping over to use the objects.

// Dropdown menu data for building: dropdowns can be multi dimentional.

var MenuNode = function (title, link) {
    this.children = [];
    this.title = title;
    this.link = link;
}

MenuNode.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChildren: function () {
      // or a menunode could be resposible for getting its own children
    }

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    methodToBuildMenuItem(node.title);

    indent++;

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

function run() {
    var menu = new MenuNode("root");
    var title1 = new MenuNode("home");
    var title2 = new MenuNode("garden");
    var subtitle1 = new MenuNode("chairs");
    var subtitle2 = new MenuNode("deckChairs");

    title1.add(subtitle1);
    title2.add(subtitle2);

    menu.add(title1);
    menu.add(title2);
    menu.remove(title1);  // note: remove

    traverse(1, tree); // build menu
}

// composition pattern
const menuData = [
  {title: "root1", link: 'www.link.com', children:[]},
  {title: "root2", link: 'www.link.com', children:[{title: "root2sub1", link: 'www.link.com', children:[{title: "root2sub1", link: 'www.link.com', children:[]}]}]},
  {title: "root2", link: 'www.link.com', children:[{title: "root2sub1", link: 'www.link.com', children:[]},{title: "root2sub2", link: 'www.link.com', children:[]}]},
];

//
// class menuItem {
//   constructor(title, link, indentation) {
//     this.title = title;
//     this.link = link;
//     this.indentation = indentation || 0;
//     this.children = [];
//   }
//
//   add(child) {
//     this.children.push(child);
//   }
// }
//
// function menuFactory(item, indentation=0) {
//   const parent = new menuItem(item.title, item.link, indentation);
//
//   if(item.children == 0) {
//     return parent;
//   } else {
//     indentation++;
//     for(let i = 0; i < item.children.length; i++) {
//       parent.add(menuFactory(item.children[i], indentation));
//     }
//     return parent;
//   }
// }
//
// function menuBuilder() {
//   return menuData.map((items) => {
//     return menuFactory(items);
//   });
// }







// class NavigationBuilder {
//   constructor(menu) {
//     this.menu = menu;
//   }
//
//   build() {
//     const navigationHTML = document.createElement('nav');
//     this.menu.forEach((rootMenu) => {
//       navigationHTML.append(this.buildRootMenuHTML(rootMenu));
//     });
//     console.log(navigationHTML);
//   }
//
//   buildRootMenuHTML(rootMenu) {
//     const rootMarkUp = this.buildListHTML();
//     rootMarkUp.append(this.recursiveListBuilder(rootMenu));
//   }
//
//   recursiveListBuilder(rootMenu) {
//     const root = this.buildListItemHTML(rootMenu);
//
//     if(rootMenu.children == 0) {
//       return root;
//     } else {
//       for(let i = 0; i < rootMenu.children.length; i++) {
//         root.append(this.recursiveListBuilder(rootMenu.children[i]));
//       }
//       return root;
//     }
//   }
//
//   buildListHTML() {
//     return document.createElement('ul');
//   }
//
//   buildListItemHTML(rootMenu) {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = rootMenu.title
//     listItem.setAttribute('href', rootMenu.link);
//     return listItem;
//   }
// }
//
// const menu = menuBuilder();
// new NavigationBuilder(menu).build();

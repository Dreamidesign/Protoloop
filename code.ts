// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
//  figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
//figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  // if (msg.type === 'create-rectangles') {
  //   const nodes: SceneNode[] = [];
  //   for (let i = 0; i < msg.count; i++) {
  //     const rect = figma.createRectangle();
  //     rect.x = i * 150;
  //     rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
  //     figma.currentPage.appendChild(rect);
  //     nodes.push(rect);
  //   }
  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);
  // }

  function sortByPosition(a: SceneNode, b: SceneNode){

    //return a.x - b.x || a.y - b.y;
    if (Math.abs(a.y - b.y) <a.height/4) return a.x - b.x;
    
    return a.y - b.y;

  };

  let selected: SceneNode[] = [];

  // Selection de toutes les frames de toute la page
  if(figma.currentPage.selection.length > 0){
    selected = figma.currentPage.selection.filter(node => node.type === "FRAME");
    selected.forEach(element => console.log(element.reactions.size()));

    // Tris des frames dans l'ordre naturel de lecture
    selected.sort(sortByPosition);
    selected.forEach(element => console.log("s "+element.name));

    // Add flow starting point 
    // interface flowPoint {nodeId: string ; name: string}
    // let start:  Array<flowPoint> = [];
    // let id :string = selected[0].id;
    // let name: string = "TEST";
    // let a: flowPoint = {id, name};
    // start.push(a); 
    
    

    // Iterate through the selection 
    selected.forEach(function(element, index){
      if(index >0) {
        element.reactions[]
      }
      
    }
      
    );

    // Create reaction between current and previous frame

  }




  // for (const node of figma.currentPage.selection) {
  //   // if ("opacity" in node) {
  //   //   node.opacity *= 0.5
  //   // }
  //   s.push(node);

  // }

  

  

  

  


  

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
//};

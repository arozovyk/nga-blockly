var colourList = ["red", "green"];

var coloursFlyoutCallback = function (workspace) {
  var blockList = [];

  for (var i = 0; i < colourList.length; i++) {
    blockList.push({
      kind: "block",
      type: "dest_pool_context",
      fields: {
        NAME: "vente_tvsvod",
      },
    });
  }
  return blockList;
};
ws.registerToolboxCategoryCallback("COLOUR_PALETTE", coloursFlyoutCallback);

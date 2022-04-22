function runPlugin() {
  let selectedElements = figma.currentPage.selection;
  console.log(
    'This is the selected element>>>>>>>>>>>>>>>>>>>>>>>>',
    selectedElements
  );

  if (selectedElements.length === 0) {
    figma.notify('No elements selected');
    return;
  } else if (selectedElements.length > 1) {
    figma.notify('Please select only one element');
    return;
  } else {
    let selectedName = selectedElements[0].name;

    function hasSameName(node) {
      return node.name === selectedName;
    }

    let withSameName = figma.currentPage.findAll(hasSameName);

    figma.currentPage.selection = withSameName;
    figma.notify(`${withSameName.length} elements selected`);
  }
  figma.closePlugin();
}

runPlugin();

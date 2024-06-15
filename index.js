// code your solution here
function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }
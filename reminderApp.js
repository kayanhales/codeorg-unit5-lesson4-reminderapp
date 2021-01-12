var index = 0;
var reminders = [];

onEvent("addButton", "click", function( ) {
  var reminder = getText("reminderInput");
  appendItem(reminders, reminder);
  updateScreen();
});

onEvent("rightButton", "click", function( ) {
  if (index < reminders.length-1) {
    index++;
  }
  updateScreen();
});

onEvent("leftButton", "click", function( ) {
  if (index > 0) {
    index--;
  }
  updateScreen();
});

function updateScreen() {
  setProperty("countOutput", "text", index+1);
  setProperty("reminderInput", "text", "");
  setProperty("reminderOutput", "text", reminders[index]);
}
```

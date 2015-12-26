# 

## Countdown.js
[Super simple countdowns.](gumroad.github.io)

Normally, delete actions trigger a confirmation dialog. Like so:

We're not huge fans of this. It assumes that the user is wrong, and it means an extra click for the user. We prefer to think the user is right (but still has the option to cancel). We thought up this fun new interaction:

For irreversible actions like refunding a purchase, or sending an email — this works great and doesn't require any back-end code.

var submitCountdown = new Countdown(3, function(seconds) { $deleteTrigger.text('Deleting in ' + seconds + '...'); $cancelTrigger.show(); }, function() { $newDeleteTrigger.text('Deleted'); $cancelTrigger.hide(); }); $cancelTrigger.on('click', function() { submitCountdown.abort(); $cancelTrigger.hide(); }); 

We realize this isn't perfect. Ideally, most actions should be negated with an "undo" capability — but that often requires back-end code and may lead to user confusion.


## slick

[kenwheeler.github.io](Events methods)




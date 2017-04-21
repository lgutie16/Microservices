 var plugin = function(options) {    
   this.add({role:'math', cmd:'sum'}, function(msg, respond) {
         let sum = msg.left + msg.right
         respond(null, {answer: sum });
    });  

   return 'operations'
}

module.exports = plugin
function PersistanceLayer(){

    
    this.calltDataEmoji = () => {
        return new Promise((resolve, reject) => {
          
          $.ajax({
            
            url: "https://unpkg.com/emoji.json@12.1.0/emoji-compact.json",
            
            type: "GET",
            success: function(data) {
              
              resolve(data);
            },
            error: function(error) {
              reject(error);
            }
          });
        });
      };



}
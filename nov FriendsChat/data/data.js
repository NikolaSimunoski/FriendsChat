function DataLayer() {
this.perssitance = new PersistanceLayer();



this.persistanceData = async () => {
 var data  =  await this.perssitance.calltDataEmoji();
    
   return data;

    
    }
}
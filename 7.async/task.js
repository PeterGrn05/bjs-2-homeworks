class AlarmClock {
  constructor(intervalId){
   this.alarmCollection = [];
   this.intervalId = null;
  }

  addClock(time, callback) {
   if (!time || !callback) {
    throw new Error('Отсутствуют обязательные аргументы');
   }
   if(this.alarmCollection.some(alarm => alarm.time === time)){
    console.warn('Уже присутствует звонок на это же время');
   }
   this.alarmCollection.push ({
    callback,
    time,
    canCall: true
   });
  }
  removeClock(time){
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  getCurrentFormattedTime (){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return  `${hours}:${minutes}`;
  }
  start(){
    if(this.intervalId !== null){
       return;
    }
    this.intervalId = setInterval(() => {
      const currenTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currenTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }
  stop(){
   if (this.intervalId){
    clearInterval(this.intervalId);
    this.intervalId = null;
   }
  }
  resetAllCalls(){
    this.alarmCollection.forEach(alarm => {
      alarm.canCall =true
      });
  }
  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}
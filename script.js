function CreateStopWatches () {
    this.mainDiv = document.createElement('div');
    this.timeDisplaydiv = document.createElement('div');
    this.buttonWrapper = document.createElement('div');
    this.startButton = document.createElement('button');
    this.pauseButton = document.createElement('button');
    this.stopButton = document.createElement('button');
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
}

CreateStopWatches.prototype.formatElements = function () {
    this.mainDiv.setAttribute('class','container');
    this.timeDisplaydiv.setAttribute('class','timer-display');
    this.buttonWrapper.setAttribute('class','buttons');
    this.timeDisplaydiv.innerHTML = '00 : 00 : 00 : 000'
    this.startButton.innerHTML = 'Start';
    this.pauseButton.innerHTML = 'Pause';
    this.stopButton.innerHTML = 'Stop';
}

CreateStopWatches.prototype.insertElements = function () {
    let mainDiv = document.getElementById('timer-wrapper');
    mainDiv.insertAdjacentElement("beforeend",this.mainDiv);
    this.mainDiv.insertAdjacentElement("beforeend",this.timeDisplaydiv);
    this.mainDiv.insertAdjacentElement("beforeend",this.buttonWrapper);
    this.buttonWrapper.insertAdjacentElement("beforeend",this.startButton);
    this.buttonWrapper.insertAdjacentElement("beforeend",this.pauseButton);
    this.buttonWrapper.insertAdjacentElement("beforeend",this.stopButton);
}

CreateStopWatches.prototype.init = function () {
    this.formatElements();
    this.insertElements();
    this.createEventListeners();
}

CreateStopWatches.prototype.createEventListeners = function() {
    let self = this;
    this.startButton.addEventListener('click', ()=>{
        self.startTimer();
    })
    this.pauseButton.addEventListener('click', ()=>{
        self.pauseTimer();
    })
    this.stopButton.addEventListener('click', ()=>{
        self.stopTimer();
    })
}

CreateStopWatches.prototype.startInterval = function () {
    let self = this;
    clearInterval(self.timer);
    this.timer = setInterval(function () {
      self.increaseCounter();
    }, 10);
};

CreateStopWatches.prototype.startTimer = function () {
    clearInterval(this.timer);
    this.startInterval();
};
CreateStopWatches.prototype.pauseTimer = function () {
    clearInterval(this.timer);
};
CreateStopWatches.prototype.stopTimer = function () {
    clearInterval(this.timer);
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.display();
};
CreateStopWatches.prototype.increaseCounter = function () {
    this.milliseconds += 10;
    if (this.milliseconds == 1000) {
        this.milliseconds = 0;
        this.seconds++;
        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes == 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
    }
    this.display();
};
  
CreateStopWatches.prototype.display = function () {
    let h = this.hours < 10 ? "0" + this.hours : this.hours;
    let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    let ms =
        this.milliseconds < 10
        ? "00" + this.milliseconds
        : this.milliseconds < 100
        ? "0" + this.milliseconds
        : this.milliseconds;
    this.timeDisplaydiv.innerText = `${h} : ${m} : ${s} : ${ms}`;
//    `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}:${String(this.milliseconds).padStart(3, '0')}`;
};

let Watch1 = new CreateStopWatches();
let Watch2 = new CreateStopWatches();
let Watch3 = new CreateStopWatches();
Watch1.init();
Watch2.init();
Watch3.init();
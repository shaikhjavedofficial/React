class Timer {
    constructor(callback, interval) {
        this.callback = callback;
        this.interval = interval;
        this.timerId = 0;
    }

    executeAndStartTimer() {
        this.callback().then(function startNewTimer() {
            this.timerId =
                setTimeout(this.executeAndStartTimer, this.interval);
        });
    }

    start() {
        if (this.timerId === 0) {
            this.executeAndStartTimer();
        }
    }
    stop() {
        if (this.timerId !== 0) {
            clearTimeout(this.timerId);
            this.timerId = 0;
        }
    }
}

const timer = new Timer(getTodos, 2000);
timer.start();

function getTodos() {
    console.log("call");
}
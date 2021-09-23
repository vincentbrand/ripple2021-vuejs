const ChartPreprocessor = {
    // variables
    topAmount: 100,
    intervalAmount: 25,
    // configuration settings

    // methods
    getChartSettingsObject:function(chartMax, steps=5){
        let result = {}
        result.topChart = this.getTop(chartMax);
        result.stepAmount = this.intervalStep(steps);
        return result;
    },
    // get interval steps
    intervalStep:function(steps= 5){
        this.intervalAmount = this.topAmount / steps;
        return this.intervalAmount;
    },

    // get marginal top for number on chart
    getTop:function(i){
       if(i <= 100){
           this.topAmount = 100;
       }else if((i > 100)&&(i <= 1000)){
           this.topAmount = 1000;
       }else if((i > 1000)&&(i <= 5000)){
           this.topAmount = 5000;
       }else if((i > 5000)&&(i <= 10000)){
           this.topAmount = 10000;
       }else if((i > 10000)&&(i <= 2000)){
           this.topAmount = 20000;
       }else{
           this.topAmount = 50000;
       }
       return this.topAmount;
    }

}

export default ChartPreprocessor
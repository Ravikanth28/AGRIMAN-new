function calculate() {
    var landMeasurement = parseFloat(document.getElementById('land').value);
    var crop = document.getElementById('crop').value;

    
    var harvestRates = {
        wheat: 3,
        jute: 2,
        sugarcane: 60,
    };
    var harvestRate = harvestRates[crop];

    if (harvestRate) {
       
        var harvest = landMeasurement * harvestRate;
        document.getElementById('output').innerHTML = "Expected Harvest for " + crop + ": " + harvest + " tons";
    } else {
       
        document.getElementById('output').innerHTML = "Please select a crop";
    }
}

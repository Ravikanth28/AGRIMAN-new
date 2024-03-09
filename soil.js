function findSoilType() {
    var stateName = document.getElementById("stateInput").value.toLowerCase();
    var soilType = "";
  
    switch (stateName) {
      case "kancheepuram":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "tiruvallur":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "cuddalore":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "vellore":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "villupuram":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "tirunvannamalai":
        soilType = "Red Sandy Loam, Clay Loam, Saline Coastal Alluvium.";
        break;
      case "dharmapuri":
        soilType = "Non Calcareous Red, Non Calcareous Brown, Calcareous Black";
        break;
      case "krishnagiri":
        soilType = "Non Calcareous Red, Non Calcareous Brown, Calcareous Black";
        break;
      case "salem":
        soilType = "Non Calcareous Red, Non Calcareous Brown, Calcareous Black";
        break;
      case "namakkal":
        soilType = "Non Calcareous Red, Non Calcareous Brown, Calcareous Black";
        break;
      case "erode":
        soilType = "Red Loamy, Black";
        break;
      case "coimbatore":
        soilType = "Red Loamy, Black";
        break;
      case "tiruppur":
        soilType = "Red Loamy, Black";
        break;
      case "theni":
        soilType = "Red Loamy, Black";
        break;
      case "karur":
        soilType = "Red Loamy, Black";
        break;
      case "dindigul":
        soilType = "Red Loamy, Black";
        break;
      case "perambalur":
        soilType = "Red Loamy, Black";
        break;
      case "ariyalur":
        soilType = "Red Loamy, Black";
        break;
      case "thanjavur":
        soilType = "Red Loamy , Alluvium";
        break;
      case "nagapattinam":
        soilType = "Red Loamy , Alluvium";
        break;
      case "tiruvarur":
        soilType = "Red Loamy , Alluvium";
        break;
      case "trichy":
        soilType = "Red Loamy , Alluvium";
        break;
      case "pudukkottai":
        soilType = "Red Loamy , Alluvium";
        break;
      case "madurai":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "sivagangai":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "ramanathapuram":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "virudhunagar":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "tirunelveli":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "thoothukudi":
        soilType = "Coastal Alluvium, Black, Red Sandy Soil, Deep Red Soil";
        break;
      case "kanyakumari":
        soilType = "Saline Coastal Alluvium, Deep Red Loam";
        break;
      case "nilgiris":
        soilType = "Lateritic";
        break;
      case "kodaikanal":
        soilType = "Lateritic";
        break;
      case "puducherry":
        soilType = "red sandy/clay loam type";
        break;
      default:
        soilType = "Soil type information not available for this state.";
    }
  
    document.getElementById("soilType").innerText = soilType;
}

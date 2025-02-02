function myFunction() {
  if (confirm("Do you agree to share your personal information with my site?")) {
    const nickname = "Yahzee";
    const height = "5\'5\"";
    const weight = "180.779 lbs";
    const total = " Name: " + nickname + "\n Height: " + height + "\n Weight: "+ weight;
    console.log(total);
  } 
  else {
    console.log("User does not wish to share his/her information.");
  }
  myFunction ()
}

    
    

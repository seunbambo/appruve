var subscription = [
  {
    // Object @ 0 index
    subscriptionType: "gold",
    amount: 100,
  },
  {
    // Object @ 1 index
    subscriptionType: "silver",
    amount: 50,
  },
  {
    // Object @ 2 index
    subscriptionType: "bronze",
    amount: 25,
  },
];

function getInfo() {
  var type = document.getElementById("type").value;
  //   console.log(type);
  //   var amount = document.getElementById("amount").value;

  for (var i = 0; i < subscription.length; i++) {
    if (type == "gold") {
      document.write("Gold is logged in!!!");
      return;
    } else if (type == "silver") {
      document.write("silver subscriber is logged in!!!");
      return;
    }
    document.write("Bronze is logged in!!!");
  }
}

var subscription = [
  {
    // Object @ 0 index
    subscriptionType: "Gold",
    amount: 100,
  },
  {
    // Object @ 1 index
    subscriptionType: "Silver",
    amount: 50,
  },
  {
    // Object @ 2 index
    subscriptionType: "Bronze",
    amount: 25,
  },
];

function getInfo() {
  var type = document.getElementById("type").value;
  //   console.log(type);
  //   var amount = document.getElementById("amount").value;

  for (var i = 0; i < subscription.length; i++) {
    if (type == "Gold") {
      document.write("You now have Gold subscription!");
      return;
    }
    if (type == "Silver") {
      document.write("You now have Silver subscription!");
      return;
    }
    document.write("You now have Bronze subscription!");
  }
}

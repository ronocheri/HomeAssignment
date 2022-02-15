jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  // increase customer order count by 1
  customer.order_count += 1;
  fs.writeFile("./customer.json", JSON.stringify(customer), err => {
    if (err) console.log("Error writing file:", err);
  });
});
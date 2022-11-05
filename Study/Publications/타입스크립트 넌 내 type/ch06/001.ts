let robbot = { name: "mimi", age: 3, available: true };

function get_available(obj: { available: boolean }) {
  console.log(obj.available); // true
}

get_available(robbot); // true

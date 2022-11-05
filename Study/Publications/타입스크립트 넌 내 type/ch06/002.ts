interface robbot_property {
  age: number;
  available: boolean;
}

let robot = { name: "mimi", age: 3, available: true };

function get_available(obj: robbot_property) {
  console.log(obj.available); // true
}

get_available(robot); // true

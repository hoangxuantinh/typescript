/* 
### WHAT 
Type Guard trong TypeScript là một cơ chế giúp bạn thu hẹp kiểu của một biến trong các nhánh logic(ví dụ: câu lệnh if, switch)
để TypeScript có thể hiểu được kiểu cụ thể của biến trong từng đoạn code đó. 
Điều này giúp đảm bảo rằng các thao tác với biến đều hợp lệ dựa trên kiểu dữ liệu. */

// 1. Sử dụng typeof : typeof được sử dụng để kiểm tra các kiểu dữ liệu nguyên thủy như string, number, boolean, v.v.
function printValue(value: string | number) {
    if (typeof value === "string") {
      console.log(`String value: ${value.toUpperCase()}`);
    } else {
      console.log(`Number value: ${value.toFixed(2)}`);
    }
}

// 2. Sử dụng instanceof: instanceof được sử dụng để kiểm tra nếu một đối tượng là thể hiện của một class cụ thể.
class Dog {
    bark() {
      console.log("Woof!");
    }
}
class Cat {
    meow() {
      console.log("Meow!");
    }
}
function makeNoise(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      animal.bark(); // TypeScript biết animal là Dog
    } else {
      animal.meow(); // TypeScript biết animal là Cat
    }
  }

//   3. Kiểm tra các thuộc tính của đối tượng : TypeScript cho phép bạn kiểm tra sự tồn tại của một thuộc tính để xác định kiểu của một biến.
interface Fish {
    swim: () => void;
}
  
interface Bird {
  fly: () => void;
}
  
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript hiểu rằng animal là Fish
  } else {
    animal.fly(); // TypeScript hiểu rằng animal là Bird
  }
}


// 4. User-defined Type Guards (Tự định nghĩa): Bạn có thể tự tạo các hàm Type Guard bằng cách sử dụng kiểu trả về đặc biệt là x is Type.
interface Car {
  drive: () => void;
}
interface Bike {
  ride: () => void;
}
function isCar(vehicle: Car | Bike): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}
function useVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    vehicle.drive(); // TypeScript biết vehicle là Car
  } else {
    vehicle.ride(); // TypeScript biết vehicle là Bike
  }
}


// 5. never Type: Khi TypeScript không thể xác định loại của biến nào khác ngoài những gì đã xác định, nó có thể coi là kiểu never. 
// Đây thường được dùng trong các hàm xử lý lỗi hoặc các switch case với tất cả các giá trị đã được xử lý.
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
function getAnimalNoise(animal: "dog" | "cat") {
  switch (animal) {
    case "dog":
      return "Woof!";
    case "cat":
      return "Meow!";
    default:
      assertNever(animal); // TypeScript biết không có loại nào khác ngoài "dog" hoặc "cat"
  }
}


// ==> Type Guard trong TypeScript giúp bạn kiểm tra và thu hẹp kiểu dữ liệu, từ đó giúp mã nguồn an toàn hơn và tránh các lỗi do sử dụng sai kiểu.
  
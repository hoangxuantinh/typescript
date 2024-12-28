/* 
  2 Method Decorator
    Mục đích: Được sử dụng để sửa đổi hoặc thêm metadata cho một method của class.
    Cách dùng: Đặt ngay trước method trong class.
    Tham số:
    target: Prototype của class (trừ static method, là constructor của class).
    propertyKey: Tên của method.
    descriptor: Property descriptor của method.
*/

function Privillege(roles: string[]) {
  return function (
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("target", target);
    console.log(methodName);
    console.log(descriptor);
    descriptor.writable = false;
  };
}

class CustomerController {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @Privillege(["admin"])
  public updateCustomer() {
    console.log("update customer");
  }
}

const customerController = new CustomerController("customerController");
customerController.updateCustomer = () => console.log("Updated customer");

customerController.updateCustomer()

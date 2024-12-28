/*
    1. Class Decorator
    Mục đích: Được sử dụng để wrap, sửa đổi hoặc thêm metadata cho một class.
    Cách dùng: Được đặt ngay trước định nghĩa class.
 */

function AddMetadata(metadata: Record<string, any>) {
  return function (constructor: any) {
    return class extends constructor {
      metadata = metadata;
    };
  };
}
  
@AddMetadata({ role: 'admin', version: 1.0 })
class User {
  metadata!: Record<string, any>;
}
  
  const user = new User();
  console.log("🚀 ~ user:", user); // { metadata: { role: 'admin', version: 1.0 } }
  console.log(user.metadata); // { role: 'admin', version: 1.0 }
  
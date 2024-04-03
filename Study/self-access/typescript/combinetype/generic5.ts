// generic class
// 외부에서 입력된 타입을 클래스 내부에 적용할 수 있는 클래스
class LocalDB<T> {
  async put(table: string, row: T): Promise<T> {
    return new Promise<T>((resovled, rejected) => {
      // T 타입의 데이터를 DB에 저장
    });
  }

  async get(table: string, key: any): Promise<T> {
    return new Promise<T>((resovled, rejected) => {
      // DB에서 T 타입의 데이터를 가져옴
    });
  }

  async getTable(table: string): Promise<T[]> {
    return new Promise<T[]>((resovled, rejected) => {
      // DB에서 T 타입의 데이터를 DB에서 가져옴
    });
  }
}

export default class IndexDB implements ICacheStore {}

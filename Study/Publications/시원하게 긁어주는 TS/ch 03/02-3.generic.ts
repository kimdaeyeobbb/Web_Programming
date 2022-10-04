/* 제네릭의 구성 방식*/

class List<T> {  // T에 따라서
    private_collection: T[];   // 넘겨주는 타입의 배열형으로 collection이 되면서 만들어짐

    add(item: T){  // 넘겨주는 타입으로 매개변수를 결정
        this._collection.push(item);
    }

    remove(item: T){   // 넘겨주는 타입으로 매개변수를 결정  
        ...
    }

    get count(){
        return this._collection.length;
    }
}
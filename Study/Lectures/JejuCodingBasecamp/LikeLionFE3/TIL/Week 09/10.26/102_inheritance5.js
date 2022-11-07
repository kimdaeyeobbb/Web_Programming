class 소세지 {
    constructor(...theArgs) {
        const arr = []
        for (const arg of theArgs) {
            arr.push(arg)
        }
        this.맛 = arr
    }
    taste() {
        let text = ""
        text += `${this.맛}맛이 납니다.`
        return text;
    }
}

class 불맛소세지 extends 소세지 {
    taste() {
        let text = " 불 맛도 나네요"
        console.log(super.taste() + text)
    }
}

const 내소세지 = new 불맛소세지("파,불고기,치즈")
내소세지.taste()
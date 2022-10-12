function func() {
    if (window === this) {
        console.log("window === this")
    }
}

func()  // window === this
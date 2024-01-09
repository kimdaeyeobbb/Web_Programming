const fetchAPItest = async (data) => {
    /* API 호출시 필요한 데이터 */
    const url = 'http://localhost:8090/users'
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    /* API 호출 */
    try {
        const response = await fetch(url, options)

        /* status error handling */
        if (!response.ok) {   // Response.ok 속성을 사용해서 상태 코드가 200~299인지 확인
            throw new Error(`response status- ${response.status}, response.statusText- ${response.statusText}`)
        }
        const resBody = await response.json() // 응답을 Json 형태로 파싱
        console.log("파싱한 데이터 확인: ", resBody)

        return resBody;
    } catch (error) {
        console.error(error);
    }
}

const data = {
    id: "testid14",
    name: "testname14",
    password: "testpw14",
}

fetchAPItest(data);

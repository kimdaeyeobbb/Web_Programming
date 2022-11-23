// 구조분해할당 방식

function Test({ one }) {
    return <div>{one}</div>
}

function App() {
    return (
        <div>
            <Test {...{ one: 'hello' }} />
        </div>
    );
}
export default App;
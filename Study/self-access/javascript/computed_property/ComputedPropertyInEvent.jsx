const ComputedPropertyInEvent = () => {
    const [state, setState] = useState({
       count: 0,
       text: '',
    })

    const onClickButton = (value) => {
        setState({
            ...state,
            count: state.count + value,
        })
    }

    const handleChange = e => {
        setState({
            [e.target.name]: e.target.value,
        })
    };

    return (
        <>
            <button onClick={() => {
                onClickButton(1)
            }}>클릭시 count 변화</button>
            <div>{state.count}</div>
            <div>
                <input
                    type="text"
                    name="text"
                    value={state.text}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default ComputedPropertyInEvent
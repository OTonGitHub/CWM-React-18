function Message() {
    const firstPart = " " // empty: false, empty whitespace: true
    const namePart = "Minty"
    return <h1>New Message: {firstPart && namePart }</h1> // firstPart twice, second whitespace, not rendered, why?
        // inside {} in tags, anything that returns a value can be placed
}

export default Message;
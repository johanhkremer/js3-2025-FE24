const MessagePropComponent = ({ message }: { message: string }) => {
    return (
        <>
            <h2>Component</h2>
            <h3>prop message ✉️</h3>
            <p>{message}</p>
        </>
    )
}

export default MessagePropComponent
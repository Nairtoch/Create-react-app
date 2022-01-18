export const Nav = props => {
    return (
        <nav>
            <ul>
                {props.data && props.data.map((item, key) => {
                    return (
                        <li key={key}>{item}</li>
                    )
                })}
            </ul>
        </nav>
    )
}
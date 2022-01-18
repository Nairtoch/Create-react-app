export const Footer = props => {
    return (
      <footer>
        <li>Address pog?</li>

        <nav>
            <ul>
                {props.data && props.data.map((item, key) => {
                    return (
                        <li key={key}>{item}</li>
                    )
                })}
            </ul>
        </nav>
      </footer>
    )
}
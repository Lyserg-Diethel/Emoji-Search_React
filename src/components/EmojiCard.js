

export function EmojiCard(props) {
    const { title, symbol, index } = props;
    const { setSpinImage } = props.useSpinImage;
    return (
        <div className="emojiCard" key={index} index={index} onClick={() => { setSpinImage(symbol) }}>
            <h1 className="emojiHeader">{symbol}</h1>
            <h2 className="emojiTitle">{title}</h2>
        </div>
    )
}
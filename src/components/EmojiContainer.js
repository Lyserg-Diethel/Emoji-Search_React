import { EmojiCard } from './EmojiCard';

function EmojiContainer(props) {
    let searchString = props.useSearchString.searchString;

    const emojiArr = props.useFilteredEmojis.emojiArr;

    const useSpinImage = props.useSpinImage;


    let filteredArr = emojiArr.filter(el => { if (el.keywords.match(new RegExp(searchString, 'gi'))) { return el } });
    let filteredEmojiComponents = filteredArr.map((el, index) => <EmojiCard symbol={el.symbol} title={el.title} index={index} key={index} useSpinImage={useSpinImage} />)

    return (
        <div className="emojiContainer">
            {filteredEmojiComponents}
        </div>
    );
}

export default EmojiContainer;
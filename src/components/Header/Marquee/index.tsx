import news from './randomNews.json'

export default function Marquee(): JSX.Element {
    return (
        // @ts-ignore-comment
        <marquee direction="right" style={{fontSize:'15px', gridColumn: '1 / 3'}}> 
            {news.map((item) => (
                `${item.new}. - `
            ))}
        {/*// @ts-ignore-comment*/ }
        </marquee>
    )
}
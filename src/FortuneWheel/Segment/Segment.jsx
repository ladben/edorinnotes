const Segment = ({className, style, url, color, name, index}) => {
    return (
        <svg className={className} style={style} width="391" height="391" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id={`segment-image-pattern-${index}`} patternUnits="userSpaceOnUse" width="392" height="170">
                    <image href={`./assets/profiles/${name}.webp`} x="111" y="0" width="170" height="170" />
                </pattern>
            </defs>
            <path
                d="M145.138 8.93202C178.18 0.00556868 213.006 0.00556868 246.048 8.93202C250.326 10.0877 252.698 14.6622 251.295 18.9808L203.373 166.467C200.924 174.004 190.262 174.004 187.813 166.467L139.892 18.9808C138.488 14.6622 140.86 10.0877 145.138 8.93202Z"
                fill={url}
            />
            <path
                d="M145.138 8.93202C178.18 0.00556868 213.006 0.00556868 246.048 8.93202C250.326 10.0877 252.698 14.6622 251.295 18.9808L203.373 166.467C200.924 174.004 190.262 174.004 187.813 166.467L139.892 18.9808C138.488 14.6622 140.86 10.0877 145.138 8.93202Z"
                fill={color}
                style={{mixBlendMode: "color"}}
            />
            <path
                d="M145.138 8.93202C178.18 0.00556868 213.006 0.00556868 246.048 8.93202C250.326 10.0877 252.698 14.6622 251.295 18.9808L203.373 166.467C200.924 174.004 190.262 174.004 187.813 166.467L139.892 18.9808C138.488 14.6622 140.86 10.0877 145.138 8.93202Z"
                stroke="#1B2F31"
                strokeWidth="3.27221"
            />
        </svg>
    );
}
 
export default Segment;
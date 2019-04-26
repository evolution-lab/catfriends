
const ColorUtil = {};

ColorUtil.getRandomRGBValue = () => {
    return Math.floor(Math.random() * 256);
};

ColorUtil.getRandomRGBColor = () => {
    return `rgb(${ColorUtil.getRandomRGBValue()}, ${ColorUtil.getRandomRGBValue()}, ${ColorUtil.getRandomRGBValue()})`;
};

export default ColorUtil;
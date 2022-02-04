import { FooterStyled } from "../styles/Footer.styles";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({
    text
}) => {
    return (
        <FooterStyled> {text} </FooterStyled>
     );
};

export default Footer;
import Mailto from "../Mailto/Mailto";
import { DivStyled, ImageDivStyled, TextDivStyled } from "../styles/ListItem.styles";
import { ListItemProps } from "./types";

const ListItem: React.FC<ListItemProps> = ({
    item: {text, icon}
}) => {
    return (
        <>
            <DivStyled>
                <ImageDivStyled>
                        <img src={`./icons/${icon}`} alt="icon"/>
                </ImageDivStyled>
                <TextDivStyled> 
                    <Mailto text={text} icon={icon}/>
                </TextDivStyled>
            </DivStyled>
        </>
     );
};

export default ListItem;
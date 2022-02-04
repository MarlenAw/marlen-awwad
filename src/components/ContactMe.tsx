import data from "../data/data";
import Footer from "./Footer/Footer";
import ListItem from "./ListItem/ListItem";

const ContactMe: React.FC = () => {
    return (
        <>
            {data?.map((item, index)=>{
                return <ListItem key={index} item={item} />

            })}
            <Footer text="www.marlenawwad.com"/>
        </>
     );


};

export default ContactMe;
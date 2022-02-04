import { MailtoProps } from "./types";

const Mailto: React.FC<MailtoProps> = ({
    text,
    icon
}) => {
    return (
        <>
            { icon?.includes('mail') ? <a className="mailto" href={`mailto:${text}`}>{text}</a> : 
                icon?.includes('phone') ? <a className="mailto" href={`tel:${text}`}>{text}</a> :
                    icon?.includes('instagram') ? <a className="mailto" target="_blank" rel="noreferrer" href={`https://instagram.com/${text}`}>{text}</a> :
                        icon?.includes('facebook') ? <a className="mailto" target="_blank" rel="noreferrer" href={`https://facebook.com/${text}`}>{text}</a> :
                            text }
        </>
     );
};

export default Mailto;
import { useState } from "react";
import { Link } from "react-router-dom";
import './exhibitstyle.css';

function BlockDisplay({ pic, title, description, link }) {
    return (
        <Link to={link} className="block-display-link">
            <div className="block-display">
                {pic && <img src={pic} alt={title} />}
                <div className="block-display-title">
                    <h3>{title}</h3>
                    <div className="block-display-tags">
                        {description.left && (
                            <span className="left-tag">{description.left}</span>
                        )}
                        {description.right && (
                            <span className="right-tag">{description.right}</span>
                        )}
                    </div>
                </div>
                <p>{description.content}</p>
            </div>
        </Link>
    );
}

function ExhibitDisplay({ data }) {
    const [selectedBlock, setSelectedBlock] = useState(null);

    return (
        <div className="exhibit-display">
            {data.map((block, index) => (
                <div
                    key={index}
                    className={`block ${selectedBlock === index ? 'selected' : ''}`}
                    onClick={() => setSelectedBlock(index)}
                >
                    <BlockDisplay
                        pic={block.pic}
                        title={block.title}
                        description={block.description}
                        link={block.link} // 傳入 link
                    />
                </div>
            ))}
        </div>
    );
}

export default ExhibitDisplay;
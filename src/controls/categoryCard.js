import { Link } from 'react-router-dom';
import './categoryCard.css'; 

export default function CategoryCard({ title, description, link }) {
    return (
        <Link to={link} className="category-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
}

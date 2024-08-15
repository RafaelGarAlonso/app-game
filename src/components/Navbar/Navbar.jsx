import './Navbar.css';

export const Navbar = ({ userName, points }) => {
    return (
        <div className="navbar">
            <div className="name">
                Name: {userName}
            </div>
            <div className="points">
                Points: {points}
            </div>
        </div>
    )
}
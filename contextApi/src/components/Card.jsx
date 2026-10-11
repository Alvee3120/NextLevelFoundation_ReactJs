import "./Card.css";
function Card({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <hr />

      <h4>Address</h4>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city} - {user.address.zipcode}
      </p>

      <hr />

      <h4>Company</h4>
      <p>{user.company.name}</p>
      <p className="catchphrase">{user.company.catchPhrase}</p>
    </div>
  );
}

export default Card;

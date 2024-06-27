import './styles/Sidebar.css';

const Sidebar = ({ colonies, resources, onUpgradeColony, onRemoveColony }) => {
  console.log('Colonies dans la barre latérale:', colonies);
  return (
    <div className='sidebar'>
      <h2>Ressources : {resources}</h2>
      <h3>Colonies</h3>
      <ul>
        {colonies.map((colony) => (
          <li key={colony.id} className='colony-item'>
            <div className='colony-info'>
              <p>
                <strong>ID de la Colonie :</strong> {colony.id}
              </p>
              <p>
                <strong>Ressources :</strong> {colony.resources}
              </p>
              <p>
                <strong>Niveau :</strong> {colony.level}
              </p>
              <p>
                <strong>Coût d'amélioration :</strong> {colony.level * 50}
              </p>
            </div>
            <button
              className='upgrade-button'
              onClick={() => onUpgradeColony(colony.id)}
              disabled={resources < colony.level * 50}
            >
              Améliorer
            </button>
            <button
              className='remove-button'
              onClick={() => onRemoveColony(colony.id)}
            >
              Détruire
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

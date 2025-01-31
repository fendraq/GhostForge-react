import InspectMaterial from './InspectMaterial'
// tar data och type som props när funktionen används i app.jsx
export default function ItemList({ data, type, onInspect }) { //hade glömt att skicka onInspect som prop
  // filtrerar datan att bara innehålla items som matchar den givna typen.
  const filteredItems = data.filter(item => item.type === type);

  return (
    <>
      {filteredItems.map(item => (
        <li className="item" key={item.id} data-price={item.price} id={item.id}>{item.title}
          <InspectMaterial item={item} onInspect={onInspect} />
        </li>
      ))}
    </>
  );
}


/* Gammal kod som låg till grund för denna dynamiska del:
const listStories = data.filter(story => story.type === 'story').map(story =>
    <li className="item" dataPrice={story.price} id={story.id}>{story.title}<button className="itemAdd">Inspect</button>
    </li>
  );

  const listElements = data.filter(element => element.type === 'element').map(element =>
    <li className="item" dataPrice={element.price} id={element.id}>{element.title}<button className="itemAdd">Inspect</button></li>
  );

  const listInscriptions = data.filter(inscription => inscription.type === 'inscription').map(inscription =>
    <li className="item" dataPrice={inscription.price} id={inscription.id}>{inscription.title}<button className="itemAdd">Inspect</button></li>
  ); */
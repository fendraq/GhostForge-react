function InspectMaterial({ item, onInspect }) {
  const handleInspect = () => {
    onInspect(item);
  };

  return (
    <button onClick={handleInspect}>Inspect</button> 
  );
}

export default InspectMaterial;
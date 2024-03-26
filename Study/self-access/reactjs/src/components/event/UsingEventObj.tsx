const UsingEventObj = () => {
  const handleOnClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <>
      <h1>Using Event Object</h1>
      <button name={"이벤트 발생 버튼"} onClick={handleOnClick}>
        클릭하여 이벤트 발생!
      </button>
    </>
  );
};

export default UsingEventObj;

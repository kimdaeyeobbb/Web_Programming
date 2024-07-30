test("데이터는 참차마요 샌드위치이다.", () => {
  return fetchData().then((data) => {
    expect(data).toBe("참차마요 샌드위치");
  });
});

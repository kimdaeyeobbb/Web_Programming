("paullab CEO leehojun hello CEO").replace(/CEO/, "CTO");  // 'paullab CTO leehojun hello CEO' (앞에것만 수정됨)
("paullab CEO leehojun hello CEO").replace(/CEO/g, "CTO"); // 'paullab CTO leehojun hello CTO'
("paullab CEO leehojun hello CEO").match(/CEO/g);
("paullab CEO leehojun hello CEO").split(/CEO/g);  // ['paullab ', ' leehojun hello ', '']
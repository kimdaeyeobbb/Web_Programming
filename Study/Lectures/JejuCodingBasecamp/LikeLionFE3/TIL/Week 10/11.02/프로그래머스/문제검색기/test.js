const $form = document.querySelector("#form-search");
const $sectionProblem = document.querySelector("#section-problem");

let totalProblem = [];

async function getDate() {
    try {
        const data = await fetch(
            "https://school.programmers.co.kr/api/v1/school/challenges/?page=1&perPage=20&levels[]=0&levels[]=1&levels[]=2&levels[]=3&levels[]=4&levels[]=5&languages[]=javascript&order=acceptance_desc"
        );
        const { result: problemList, totalPages } = await data.json();
        for (let i = 2; i < totalPages; i++) {
            let page = await fetch(
                `https://school.programmers.co.kr/api/v1/school/challenges/?page=${i}&perPage=20&levels[]=0&levels[]=1&levels[]=2&levels[]=3&levels[]=4&levels[]=5&languages[]=javascript&order=acceptance_desc`
            );
            const { result } = await page.json();
            problemList.push(...result);
        }
        const $frag = new DocumentFragment();
        problemList.forEach((problem) => {
            $frag.append(draw(problem));
        });
        totalProblem = [...problemList];
        $sectionProblem.append($frag);
    } catch (error) {
        console.log(error);
    }
}

function draw(problem) {
    const ul = document.createElement("ul");
    const li_title = document.createElement("li");
    const a = document.createElement("a");
    const h2 = document.createElement("h2");
    const li_level = document.createElement("li");
    const span_level = document.createElement("li");
    const li_partTitle = document.createElement("li");
    const span_partTitle = document.createElement("li");
    ul.classList.add("list-problem");
    h2.textContent = problem.title;
    a.setAttribute("href", `https://school.programmers.co.kr/learn/courses/30/lessons/${problem.id}`);
    a.setAttribute("target", "_blank");
    span_level.textContent = `Level : ${problem.level}`;
    span_partTitle.textContent = problem.partTitle;
    a.append(h2);
    li_title.append(a);
    li_level.append(span_level);
    li_partTitle.append(span_partTitle);
    ul.append(li_title, li_level, li_partTitle);
    return ul;
}

function search(event) {
    event.preventDefault();
    const $input = $form.querySelector("input");
    const $frag = new DocumentFragment();
    const re = new RegExp($input.value);
    const searched = totalProblem.filter((problem) => re.test(problem.title));

    searched.forEach((problem) => {
        $frag.append(draw(problem));
    });

    $sectionProblem.innerHTML = "";
    $sectionProblem.append($frag);
}

function init() {
    getDate();
    $form.addEventListener("submit", search);
}

init();

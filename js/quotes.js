const quotes = [
  {
    quote : "명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다.",
    author : "워렌버핏",
  },
  {
    quote : "간단함이 훌륭함의 열쇠다.",
    author : "이소룡",
  },
  {
    quote : "모든 기능은 유지비용이 든다. 소수의 기능을 가지는 것은 우리가 정말로 신경 쓰는 것에 집중하도록 하고 그것들이 뛰어나도록 만든다.",
    author : "[데이비드 카프]",
  },
  {
    quote : "현재와 미래는 어떻게든 연결되어 있다.",
    author : "스티브 잡스",
  },
  {
    quote : "절대 포기하지 마라. 장벽에 부딪히거든, 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지 마라.",
    author : "랜디 포시",
  },
  {
    quote : "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
    author : "카를로스 곤",
  },
  {
    quote : "앞날을 결정짓고자 하면 옛 것을 공부하라.",
    author : "공자",
  },
  {
    quote : "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
    author : "크리스티 매티슨",
  },
  {
    quote : "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다.",
    author : "유태경전",
  },
  {
    quote : "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
    author : "하우얼",
  },
  {
    quote : "내 자신의 무식을 아는 것은 지식으로의 첫걸음이다.",
    author : "바이런",
  },
  {
    quote : "가시에 찔리지 않고서는 장미를 모을 수 없다.",
    author : "핀페이",
  },
  {
    quote : "고통을 거치지 않고 얻은 승리는 영광이 아니다.",
    author : "나폴레옹",
  },
  {
    quote : "바람이 불지 않으면 노를 저어라.",
    author : "윈스턴 처칠",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
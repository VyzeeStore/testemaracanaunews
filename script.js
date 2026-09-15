/* =========================================================
   MARACANAÚ NEWS — script.js
   Sem dependências. Edite SITE, CATEGORIAS, NOTICIAS e
   PARCEIROS abaixo para publicar conteúdo novo.
   ========================================================= */

const SITE = {
  nome: "Maracanaú News",
  bio: "Tudo de Maracanaú e regiões",
  aviso: "Não somos página policial. Publicamos informações de utilidade pública.",
  instagram: "https://instagram.com/maracanau.news",
  handle: "@maracanau.news",
  keepo: "https://keepo.io/maracanaunews",
  email: "contato@maracanaunews.com.br",
  whatsappGrupo: "https://chat.whatsapp.com/G6Ici5H41ZB8eVbGjeIcx4?s=cl&p=a&mlu=4",
  whatsappCanal: "https://whatsapp.com/channel/0029VbB2B1oIHphFzLPsVK1I",
  whatsappDireto: "https://wa.me/5585000000000", // troque pelo número comercial
  seguidores: "170 mil",
  posts: "5.061",
  regioes: "Maracanaú e região",
  logo: "assets/logo.png",   // deixe "" para voltar ao monograma MN
  senhaPainel: "maracanau2026" // troque no painel master
};

const CATEGORIAS = [
  { id: "todas",        label: "Tudo" },
  { id: "acidente",     label: "Acidente" },
  { id: "transito",     label: "Trânsito" },
  { id: "cidade",       label: "Cidade" },
  { id: "policia",      label: "Segurança" },
  { id: "saude",        label: "Saúde" },
  { id: "oportunidade", label: "Oportunidade" },
  { id: "empresas",     label: "Empresas" },
  { id: "utilidade",    label: "Utilidade pública" }
];

/* Cada notícia aceita "foto" (URL da imagem real). Sem foto,
   entra o fundo preto com a marca d'água MN. */
const NOTICIAS = [
  {
    id: 1, cat: "acidente", catLabel: "Acidente", t: 1, foto: "",
    titulo: "Motorista passa mal e colide contra poste em Maracanaú",
    resumo: "Condutor foi socorrido consciente por equipes do SAMU; poste ficou danificado e energia caiu em parte da rua.",
    autor: "Redação Maracanaú News", data: "2026-09-13", destaque: true, urgente: true,
    corpo: [
      { tipo: "p", texto: "Um motorista perdeu o controle do veículo e colidiu contra um poste na noite desta sexta-feira, em Maracanaú. Segundo testemunhas, ele passou mal ao volante momentos antes da batida." },
      { tipo: "h", texto: "Como foi o socorro" },
      { tipo: "p", texto: "Equipes de resgate chegaram ao local em poucos minutos e encontraram o condutor consciente. Ele foi encaminhado a uma unidade de saúde para exames e passa bem." },
      { tipo: "img", legenda: "Veículo ficou parcialmente destruído após atingir o poste", t: 3 },
      { tipo: "h", texto: "Energia e trânsito no local" },
      { tipo: "p", texto: "Com o impacto, o poste ficou inclinado e moradores relataram queda de energia na rua. A via foi parcialmente interditada até a retirada do carro." },
      { tipo: "quote", texto: "Ouviu-se o barulho da batida de longe. Todo mundo saiu para ver." },
      { tipo: "p", texto: "Se você presenciou o acidente e tem imagens, envie para a nossa equipe pelo direct ou pelo WhatsApp." }
    ]
  },
  {
    id: 2, cat: "oportunidade", catLabel: "Oportunidade", t: 2, foto: "",
    titulo: "La Vie Veículos realiza mega feirão com condições especiais em Maracanaú",
    resumo: "Ação acontece durante todo o fim de semana, com entrada facilitada, avaliação de usados na hora e taxa reduzida.",
    autor: "Redação Maracanaú News", data: "2026-09-12", destaque: true, patrocinado: true,
    corpo: [
      { tipo: "p", texto: "A loja realiza neste fim de semana um feirão com condições especiais de financiamento para moradores de Maracanaú e região." },
      { tipo: "h", texto: "O que tem no feirão" },
      { tipo: "p", texto: "A ação inclui avaliação de usados na hora, entrada facilitada e atendimento com equipe reforçada nos dois dias de evento." },
      { tipo: "img", legenda: "Pátio da loja preparado para o feirão", t: 5 },
      { tipo: "p", texto: "Quer divulgar a sua empresa assim? Fale com a nossa equipe comercial pelo direct ou pelo WhatsApp." }
    ]
  },
  {
    id: 3, cat: "transito", catLabel: "Trânsito", t: 4, foto: "",
    titulo: "Uber e apps: motoristas reclamam de corridas baratas até o Pici",
    resumo: "Profissionais dizem que corridas saindo de Maracanaú não cobrem combustível e recusam chamadas de curta distância.",
    autor: "Redação Maracanaú News", data: "2026-09-11", destaque: true,
    corpo: [
      { tipo: "p", texto: "Motoristas de aplicativo que atuam em Maracanaú relatam dificuldade em aceitar corridas com valores considerados baixos para o trajeto até a capital." },
      { tipo: "h", texto: "O que dizem os motoristas" },
      { tipo: "p", texto: "Segundo eles, o valor oferecido em algumas chamadas não cobre combustível, manutenção e o tempo parado no trânsito no horário de pico." },
      { tipo: "img", legenda: "Aplicativo aberto durante corrida na região", t: 2 },
      { tipo: "p", texto: "Passageiros, por outro lado, relatam demora para conseguir carro em horários de maior movimento." }
    ]
  },
  {
    id: 4, cat: "utilidade", catLabel: "Utilidade pública", t: 3, foto: "",
    titulo: "Mutirão de documentos atende moradores sem agendamento nesta semana",
    resumo: "Serviço inclui emissão de identidade, carteira de trabalho e orientação sobre benefícios sociais.",
    autor: "Redação Maracanaú News", data: "2026-09-10",
    corpo: [
      { tipo: "p", texto: "Um mutirão de serviços atende moradores de Maracanaú durante toda a semana, sem necessidade de agendamento prévio." },
      { tipo: "h", texto: "Documentos necessários" },
      { tipo: "p", texto: "É preciso levar documento com foto e comprovante de residência atualizado. O atendimento é feito por ordem de chegada." },
      { tipo: "img", legenda: "Fila de atendimento no primeiro dia do mutirão", t: 1 }
    ]
  },
  {
    id: 5, cat: "saude", catLabel: "Saúde", t: 5, foto: "",
    titulo: "Postos de saúde ampliam horário de vacinação em bairros com baixa cobertura",
    resumo: "Unidades abrem também no sábado para atualizar cadernetas de crianças e idosos.",
    autor: "Redação Maracanaú News", data: "2026-09-09",
    corpo: [
      { tipo: "p", texto: "Unidades de saúde do município ampliaram o horário de vacinação para alcançar bairros com menor cobertura vacinal." },
      { tipo: "h", texto: "Quem deve procurar" },
      { tipo: "p", texto: "A orientação é que pais e responsáveis levem a caderneta das crianças para conferência de doses em atraso." }
    ]
  },
  {
    id: 6, cat: "cidade", catLabel: "Cidade", t: 1, foto: "",
    titulo: "Obra na avenida altera fluxo e desvia linhas de ônibus por 45 dias",
    resumo: "Trecho ficará em meia pista; prefeitura sinalizou rotas alternativas para quem sai no horário de pico.",
    autor: "Redação Maracanaú News", data: "2026-09-08",
    corpo: [
      { tipo: "p", texto: "Uma intervenção de infraestrutura mudou o fluxo de veículos em um dos principais corredores da cidade nesta semana." },
      { tipo: "h", texto: "Rotas alternativas" },
      { tipo: "p", texto: "Motoristas devem usar as vias paralelas sinalizadas, e passageiros precisam ficar atentos às paradas provisórias." },
      { tipo: "img", legenda: "Sinalização de desvio instalada no trecho em obras", t: 4 }
    ]
  },
  {
    id: 7, cat: "policia", catLabel: "Segurança", t: 4, foto: "",
    titulo: "Moradores cobram mais iluminação em rua onde houve assaltos",
    resumo: "Comerciantes relatam prejuízo e pedem ronda no fim da tarde, quando o movimento é maior.",
    autor: "Redação Maracanaú News", data: "2026-09-07",
    corpo: [
      { tipo: "p", texto: "Moradores e comerciantes registraram queixas sobre a falta de iluminação em uma rua de grande circulação no bairro." },
      { tipo: "p", texto: "O pedido é por reforço na iluminação pública e rondas no fim da tarde, horário de maior movimento no comércio local." }
    ]
  },
  {
    id: 8, cat: "empresas", catLabel: "Empresas", t: 2, foto: "",
    titulo: "Centro de distribuição começa a contratar e prioriza mão de obra local",
    resumo: "Vagas são para operação, conferência e limpeza; currículos são recebidos até o fim do mês.",
    autor: "Redação Maracanaú News", data: "2026-09-06",
    corpo: [
      { tipo: "p", texto: "Uma empresa do setor logístico iniciou a contratação para o novo centro de distribuição instalado na região." },
      { tipo: "h", texto: "Como se candidatar" },
      { tipo: "p", texto: "A seleção recebe currículos pelo site da companhia, com prioridade para candidatos que moram na cidade." }
    ]
  },
  {
    id: 9, cat: "acidente", catLabel: "Acidente", t: 3, foto: "",
    titulo: "Mulher se acidenta na Serra da Aratanha e é resgatada por trilheiros",
    resumo: "Grupo que fazia trilha ajudou no resgate até a chegada das equipes; ela teve ferimentos leves.",
    autor: "Redação Maracanaú News", data: "2026-09-05",
    corpo: [
      { tipo: "p", texto: "Uma mulher se acidentou durante uma trilha na Serra da Aratanha e precisou ser retirada com ajuda de outros trilheiros." },
      { tipo: "p", texto: "Ela foi levada em maca improvisada até um ponto de acesso, onde o socorro concluiu o atendimento. O estado de saúde é estável." },
      { tipo: "img", legenda: "Resgate feito no trecho de pedras da trilha", t: 5 }
    ]
  },
  {
    id: 10, cat: "oportunidade", catLabel: "Oportunidade", t: 5, foto: "",
    titulo: "Cursos gratuitos abrem inscrições para moradores de Maracanaú",
    resumo: "Turmas de informática, atendimento e logística têm aulas à noite e certificado ao final.",
    autor: "Redação Maracanaú News", data: "2026-09-04",
    corpo: [
      { tipo: "p", texto: "Novas turmas de qualificação profissional estão com inscrições abertas para moradores da cidade." },
      { tipo: "p", texto: "As aulas acontecem no período da noite, com carga horária reduzida para quem trabalha durante o dia." }
    ]
  }
];

/* Empresas que já aparecem nos destaques do perfil */
const PARCEIROS = [
  { nome: "Novum Urbanismo", cat: "Loteamentos", desc: "Lotes e empreendimentos na região metropolitana." },
  { nome: "Ótica do Brasil", cat: "Ótica", desc: "Óculos de grau, solar e exame de vista." },
  { nome: "Despachante", cat: "Documentação veicular", desc: "Transferência, licenciamento e regularização." },
  { nome: "Plano Vida & Paz", cat: "Funerária", desc: "Plano familiar e assistência 24 horas." },
  { nome: "Cmoveis", cat: "Móveis", desc: "Móveis planejados e sob medida para a casa toda." },
  { nome: "Flávio Veículos", cat: "Veículos", desc: "Compra, venda e troca com avaliação na hora." },
  { nome: "Odonto Center", cat: "Odontologia", desc: "Clínico geral, ortodontia e implantes." }
];

/* ---------------------------------------------------------
   ARMAZENAMENTO LOCAL
   O painel salva no navegador (localStorage). Quando quiser
   um banco de verdade, troque só as funções lerDados/salvar.
   --------------------------------------------------------- */
const K = { n: "mn_noticias", p: "mn_parceiros", c: "mn_config", s: "mn_sessao" };

function lerDados(chave, padrao){
  try { const v = localStorage.getItem(chave); return v ? JSON.parse(v) : padrao; }
  catch { return padrao; }
}
function salvarDados(chave, valor){
  try { localStorage.setItem(chave, JSON.stringify(valor)); return true; }
  catch { return false; }
}

let BASE_NOTICIAS  = lerDados(K.n, NOTICIAS);
let BASE_PARCEIROS = lerDados(K.p, PARCEIROS);
Object.assign(SITE, lerDados(K.c, {}));

/* ---------------------------------------------------------
   ÍCONES
   --------------------------------------------------------- */
const I = {
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  news:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 9h7M8 13h7M8 17h4"/></svg>',
  shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M4 8h16l-1.2 11a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  whats:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.6-.1 1.2z"/></svg>',
  insta:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M9 15l6-6"/><path d="M8 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L4 11"/><path d="M16 7l1.5-1.5a3.5 3.5 0 0 1 5 5L20 13"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 22 20H2z"/><path d="M12 10v4"/><path d="M12 17h.01"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M12 15V3"/><path d="m8 7 4-4 4 4"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 16-5-5-4 4-2-2-6 6"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="m6 7 1 13h10l1-13"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  out:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4"/><path d="M9 16l-4-4 4-4"/><path d="M5 12h10"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  verified:'<svg viewBox="0 0 24 24" fill="#3897F0"><path d="m12 1.5 2.6 2.2 3.4-.3.7 3.3 2.8 2-1.5 3.1 1.5 3.1-2.8 2-.7 3.3-3.4-.3L12 22.5l-2.6-2.2-3.4.3-.7-3.3-2.8-2L4 12l-1.5-3.1 2.8-2 .7-3.3 3.4.3z"/><path d="m10.9 15.3-3-3 1.3-1.3 1.7 1.7 4-4 1.3 1.3z" fill="#fff"/></svg>'
};

/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */
const $  = (s, e = document) => e.querySelector(s);
const $$ = (s, e = document) => [...e.querySelectorAll(s)];

function dataBr(iso){
  const m = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  const [a, me, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2,"0")} ${m[me-1]} ${a}`;
}
function tempo(iso){
  const dif = (Date.now() - new Date(iso + "T12:00:00")) / 36e5;
  if (dif < 24) return "hoje";
  if (dif < 48) return "ontem";
  if (dif < 24 * 7) return `há ${Math.floor(dif/24)} dias`;
  return dataBr(iso);
}
function phHTML(n, extra = ""){
  if (n.foto) return `<div class="ph" data-t="${n.t}" style="${extra}"><img src="${n.foto}" alt="" loading="lazy"></div>`;
  return `<div class="ph mark" data-t="${n.t}" style="${extra}">${I.image}</div>`;
}
function ordenadas(){
  return BASE_NOTICIAS
    .filter(n => n.status !== "rascunho")
    .sort((a,b) => b.data.localeCompare(a.data));
}

/* Caminho do logotipo ajustado conforme a pasta da página
   (as páginas de /admin precisam de ../) */
function caminhoLogo(){
  const l = SITE.logo || "";
  if (!l) return "";
  if (/^(https?:|data:|\/)/.test(l)) return l;
  return (location.pathname.includes("/admin/") ? "../" : "") + l;
}

/* Troca o monograma MN pela imagem, quando existir. Se o arquivo
   não for encontrado, o MN volta sozinho. */
function aplicarLogo(){
  const src = caminhoLogo();
  $$(".logo-ring > span, .brand-mark").forEach(alvo => {
    if (!src){ if (!alvo.textContent.trim()) alvo.textContent = "MN"; return; }
    alvo.innerHTML = `<img src="${src}" alt="Maracanaú News" class="logo-img">`;
    alvo.querySelector("img").addEventListener("error", () => { alvo.textContent = "MN"; });
  });
  if (src){
    let ic = document.querySelector("link[rel='icon']");
    if (!ic){ ic = document.createElement("link"); ic.rel = "icon"; document.head.appendChild(ic); }
    ic.href = src;
  }
}

let toastT;
function toast(msg){
  let t = $(".toast");
  if (!t){ t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

async function compartilhar(titulo, url){
  const dados = { title: titulo, text: titulo, url };
  if (navigator.share){
    try { await navigator.share(dados); return; } catch(e){ if (e.name === "AbortError") return; }
  }
  try { await navigator.clipboard.writeText(url); toast("Link copiado"); }
  catch { toast("Copie o link da barra do navegador"); }
}

/* ---------------------------------------------------------
   ESTRUTURA COMPARTILHADA (topo, menu, busca, barra inferior)
   --------------------------------------------------------- */
function montarChrome(pagina){
  aplicarLogo();
  $$("[data-icon]").forEach(el => el.innerHTML = I[el.dataset.icon] || "");
  $$("[data-link='whats-grupo']").forEach(a => a.href = SITE.whatsappGrupo);
  $$("[data-link='whats-canal']").forEach(a => a.href = SITE.whatsappCanal);
  $$("[data-link='whats-direto']").forEach(a => a.href = SITE.whatsappDireto);
  $$("[data-link='instagram']").forEach(a => a.href = SITE.instagram);
  $$("[data-link='keepo']").forEach(a => a.href = SITE.keepo);
  $$("[data-link='email']").forEach(a => a.href = "mailto:" + SITE.email);
  $$("[data-txt='handle']").forEach(e => e.textContent = SITE.handle);
  $$("[data-txt='bio']").forEach(e => e.textContent = SITE.bio);
  $$("[data-txt='ano']").forEach(e => e.textContent = new Date().getFullYear());

  // menu lateral
  const drawer = $("#drawer");
  const abrir  = () => { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
  const fechar = () => { drawer.classList.remove("open"); document.body.style.overflow = ""; };
  $("#menuBtn")?.addEventListener("click", abrir);
  $("#drawerClose")?.addEventListener("click", fechar);
  $("#drawerBg")?.addEventListener("click", fechar);

  // busca em tela cheia
  const layer = $("#searchLayer");
  const input = $("#searchInput");
  const abrirBusca = () => {
    layer.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 60);
    buscar("");
  };
  const fecharBusca = () => { layer.classList.remove("open"); document.body.style.overflow = ""; };
  $$("[data-open-search]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); fechar(); abrirBusca(); }));
  $("#searchClose")?.addEventListener("click", fecharBusca);
  input?.addEventListener("input", e => buscar(e.target.value));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){ fechar(); fecharBusca(); }
  });

  // barra inferior
  $$(".tabbar a[data-tab]").forEach(a => {
    if (a.dataset.tab === pagina) a.classList.add("on");
  });
}

function buscar(termo){
  const box = $("#searchResults");
  if (!box) return;
  const t = termo.trim().toLowerCase();
  if (!t){
    box.innerHTML = `<p class="search-empty">Busque por bairro, assunto ou empresa. Ex.: acidente, vagas, ótica.</p>`;
    return;
  }
  const achou = ordenadas().filter(n =>
    (n.titulo + " " + n.resumo + " " + n.catLabel).toLowerCase().includes(t)
  );
  box.innerHTML = achou.length
    ? achou.map(n => `
        <a class="row" href="noticia.html?id=${n.id}">
          ${phHTML(n)}
          <div><h4>${n.titulo}</h4><span>${n.catLabel} · ${tempo(n.data)}</span></div>
        </a>`).join("")
    : `<p class="search-empty">Nada encontrado para “${termo}”. Tente outra palavra.</p>`;
}

/* ---------------------------------------------------------
   HOME
   --------------------------------------------------------- */
function cardHTML(n){
  return `
  <a class="card" href="noticia.html?id=${n.id}">
    <div class="card-media">
      ${phHTML(n, "position:absolute;inset:0;")}
      <span class="tag">${n.patrocinado ? "Publieditorial" : n.catLabel}</span>
      <span class="handle" data-txt="handle">${SITE.handle}</span>
    </div>
    <div class="card-txt">
      <h3>${n.titulo}</h3>
      <p>${n.resumo}</p>
      <div class="card-meta"><span>${tempo(n.data)}</span><i class="dot"></i><span>${n.autor}</span></div>
    </div>
  </a>`;
}

function renderHome(){
  const leadBox = $("#lead");
  if (!leadBox) return;

  const lista = ordenadas();
  const lead  = lista.find(n => n.urgente) || lista[0];

  leadBox.innerHTML = `
    <a class="lead-card" href="noticia.html?id=${lead.id}">
      ${phHTML(lead, "position:absolute;inset:0;")}
      <div class="lead-body">
        <span class="tag">${lead.urgente ? "Agora" : lead.catLabel}</span>
        <h1>${lead.titulo}</h1>
        <p>${lead.resumo}</p>
        <div class="card-sign"><b>${tempo(lead.data)}</b><span data-txt="handle">${SITE.handle}</span></div>
      </div>
    </a>`;

  // filtros
  const chips = $("#chips");
  chips.innerHTML = CATEGORIAS.map((c, i) =>
    `<button class="chip" data-cat="${c.id}" aria-pressed="${i === 0}">${c.label}</button>`
  ).join("");

  let ativa = "todas";
  const feed = $("#feed");
  const pintar = () => {
    const itens = lista.filter(n => n.id !== lead.id && (ativa === "todas" || n.cat === ativa));
    feed.innerHTML = itens.length
      ? itens.map(cardHTML).join("")
      : `<p class="search-empty">Ainda não há publicações nessa categoria.</p>`;
  };
  chips.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    ativa = b.dataset.cat;
    pintar();
  });
  pintar();

  // parceiros (prévia na home)
  const prev = $("#parceirosPreview");
  if (prev){
    prev.innerHTML = BASE_PARCEIROS.slice(0, 6).map(parceiroHTML).join("");
  }

  // números do perfil
  const st = $("#stats");
  if (st){
    st.innerHTML = `
      <div><b>${SITE.seguidores}</b><span>seguidores</span></div>
      <div><b>${SITE.posts}</b><span>publicações</span></div>
      <div><b>24h</b><span>plantão de notícias</span></div>`;
  }
}

function parceiroHTML(p){
  const sigla = p.nome.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
  return `
  <article class="partner">
    <div class="badge"><span>${sigla}</span></div>
    <h3>${p.nome}</h3>
    <div class="cat">${p.cat}</div>
    <p>${p.desc}</p>
  </article>`;
}

function renderParceiros(){
  const grid = $("#parceirosGrid");
  if (!grid) return;
  grid.innerHTML = BASE_PARCEIROS.map(parceiroHTML).join("");
}

/* ---------------------------------------------------------
   PÁGINA DE NOTÍCIA
   --------------------------------------------------------- */
function blocoHTML(b){
  if (b.tipo === "p") return `<p>${b.texto}</p>`;
  if (b.tipo === "h") return `<h2>${b.texto}</h2>`;
  if (b.tipo === "quote") return `<blockquote>${b.texto}</blockquote>`;
  if (b.tipo === "img") return `
    <figure>
      ${b.foto ? `<div class="ph"><img src="${b.foto}" alt="${b.legenda}" loading="lazy"></div>`
               : `<div class="ph mark" data-t="${b.t || 1}">${I.image}</div>`}
      <figcaption>${b.legenda}</figcaption>
    </figure>`;
  return "";
}

function renderNoticia(){
  const raiz = $("#noticia");
  if (!raiz) return;

  const id = Number(new URLSearchParams(location.search).get("id"));
  const n  = BASE_NOTICIAS.find(x => x.id === id && x.status !== "rascunho") || ordenadas()[0];
  document.title = `${n.titulo} — ${SITE.nome}`;

  $("#nTag").textContent = n.patrocinado ? "Publieditorial" : n.catLabel;
  $("#nTitulo").textContent = n.titulo;
  $("#nResumo").textContent = n.resumo;
  $("#nAutor").textContent = n.autor;
  $("#nData").textContent = dataBr(n.data);
  $("#nCover").innerHTML = phHTML(n, "width:100%;height:100%;");
  $("#nCorpo").innerHTML = n.corpo.map(blocoHTML).join("");

  const url = location.href;
  $("#btnShare").addEventListener("click", () => compartilhar(n.titulo, url));
  $("#btnWhats").href = `https://wa.me/?text=${encodeURIComponent(n.titulo + " — " + url)}`;
  $("#btnCopy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(url); toast("Link copiado"); }
    catch { toast("Não foi possível copiar aqui"); }
  });

  const mesma = ordenadas().filter(x => x.id !== n.id && x.cat === n.cat);
  const lista = (mesma.length ? mesma : ordenadas().filter(x => x.id !== n.id)).slice(0, 4);
  $("#nRelacionadas").innerHTML = lista.map(x => `
    <a class="row" href="noticia.html?id=${x.id}">
      ${phHTML(x)}
      <div><h4>${x.titulo}</h4><span>${x.catLabel} · ${tempo(x.data)}</span></div>
    </a>`).join("");
}

/* ---------------------------------------------------------
   START
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  montarChrome(document.body.dataset.page || "home");
  renderHome();
  renderParceiros();
  renderNoticia();
  iniciarAdmin();
});

/* =========================================================
   PAINEL ADMINISTRATIVO
   Login simples + publicação salva no navegador.
   ========================================================= */

const sessaoAtiva = () => sessionStorage.getItem(K.s) === "1";

function proximoId(){
  return BASE_NOTICIAS.reduce((m, n) => Math.max(m, n.id), 0) + 1;
}

/* Texto simples -> blocos. "## " vira subtítulo, "> " vira citação. */
function textoParaCorpo(txt){
  return txt.split(/\n{2,}/).map(b => b.trim()).filter(Boolean).map(b => {
    if (b.startsWith("## ")) return { tipo: "h", texto: b.slice(3).trim() };
    if (b.startsWith("> "))  return { tipo: "quote", texto: b.slice(2).trim() };
    return { tipo: "p", texto: b };
  });
}
function corpoParaTexto(corpo = []){
  return corpo.map(b => {
    if (b.tipo === "h") return "## " + b.texto;
    if (b.tipo === "quote") return "> " + b.texto;
    if (b.tipo === "img") return "";
    return b.texto;
  }).filter(Boolean).join("\n\n");
}

function lerArquivo(file){
  return new Promise((ok, erro) => {
    const r = new FileReader();
    r.onload = () => ok(r.result);
    r.onerror = () => erro();
    r.readAsDataURL(file);
  });
}

function iniciarAdmin(){
  const pg = document.body.dataset.page;
  if (!pg || !pg.startsWith("adm")) return;

  // aplica configuração salva nos campos comuns
  aplicarLogo();
  $$("[data-icon]").forEach(el => el.innerHTML = I[el.dataset.icon] || "");
  $$("[data-txt='ano']").forEach(e => e.textContent = new Date().getFullYear());

  if (pg === "adm-login") return admLogin();

  if (!sessaoAtiva()){ location.replace("login.html"); return; }
  $("#sair")?.addEventListener("click", () => {
    sessionStorage.removeItem(K.s);
    location.replace("login.html");
  });

  if (pg === "adm-noticias") admNoticias();
  if (pg === "adm-master")   admMaster();
}

/* ------------------------- LOGIN ------------------------- */
function admLogin(){
  if (sessaoAtiva()){ location.replace("index.html"); return; }
  const form = $("#formLogin");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const senha = $("#senha").value;
    if (senha === SITE.senhaPainel){
      sessionStorage.setItem(K.s, "1");
      location.href = "index.html";
    } else {
      toast("Senha incorreta. Tente de novo.");
      $("#senha").select();
    }
  });
}

/* ---------------------- NOTÍCIAS ------------------------- */
function admNoticias(){
  const form   = $("#formNoticia");
  const lista  = $("#admLista");
  const pick   = $("#pickCat");
  const arquivo= $("#foto");
  const preview= $("#preview");
  const urlFoto= $("#fotoUrl");

  let editandoId = null;
  let fotoAtual  = "";
  let cat = "cidade";

  pick.innerHTML = CATEGORIAS.filter(c => c.id !== "todas")
    .map(c => `<button type="button" data-cat="${c.id}" aria-pressed="${c.id === cat}">${c.label}</button>`).join("");
  pick.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    cat = b.dataset.cat;
    $$("button", pick).forEach(x => x.setAttribute("aria-pressed", x.dataset.cat === cat));
  });

  const mostrarPreview = src => {
    fotoAtual = src || "";
    preview.innerHTML = src ? `<img src="${src}" alt="">` : "";
    preview.style.display = src ? "block" : "none";
  };

  arquivo.addEventListener("change", async e => {
    const f = e.target.files[0]; if (!f) return;
    if (f.size > 2.5 * 1024 * 1024){ toast("Imagem muito pesada. Use até 2,5 MB."); e.target.value = ""; return; }
    mostrarPreview(await lerArquivo(f));
  });
  urlFoto.addEventListener("input", e => mostrarPreview(e.target.value.trim()));

  $("#hoje").addEventListener("click", () => {
    $("#data").value = new Date().toISOString().slice(0, 10);
  });

  function limpar(){
    editandoId = null;
    form.reset();
    mostrarPreview("");
    cat = "cidade";
    $$("button", pick).forEach(x => x.setAttribute("aria-pressed", x.dataset.cat === cat));
    $("#data").value = new Date().toISOString().slice(0, 10);
    $("#formTitulo").textContent = "Nova publicação";
    $("#btnCancelar").style.display = "none";
  }

  function salvar(status){
    const titulo = $("#titulo").value.trim();
    const resumo = $("#resumo").value.trim();
    if (!titulo){ toast("Escreva o título da notícia."); $("#titulo").focus(); return; }

    const catLabel = (CATEGORIAS.find(c => c.id === cat) || {}).label || "Cidade";
    const dados = {
      id: editandoId ?? proximoId(),
      cat, catLabel,
      t: (Math.floor(Math.random() * 5) + 1),
      foto: fotoAtual,
      titulo,
      resumo: resumo || titulo,
      autor: $("#autor").value.trim() || "Redação Maracanaú News",
      data: $("#data").value || new Date().toISOString().slice(0, 10),
      status,
      corpo: textoParaCorpo($("#corpo").value)
    };
    if (!dados.corpo.length) dados.corpo = [{ tipo: "p", texto: dados.resumo }];

    if (editandoId){
      const i = BASE_NOTICIAS.findIndex(n => n.id === editandoId);
      dados.t = BASE_NOTICIAS[i].t;
      BASE_NOTICIAS[i] = dados;
    } else {
      BASE_NOTICIAS.unshift(dados);
    }

    if (!salvarDados(K.n, BASE_NOTICIAS)){
      toast("Não foi possível salvar. Espaço do navegador cheio.");
      return;
    }
    toast(status === "rascunho" ? "Rascunho salvo" : "Notícia publicada");
    limpar();
    pintar();
  }

  $("#btnPublicar").addEventListener("click", () => salvar("publicado"));
  $("#btnRascunho").addEventListener("click", () => salvar("rascunho"));
  $("#btnCancelar").addEventListener("click", limpar);
  form.addEventListener("submit", e => e.preventDefault());

  function editar(id){
    const n = BASE_NOTICIAS.find(x => x.id === id); if (!n) return;
    editandoId = id;
    $("#titulo").value = n.titulo;
    $("#resumo").value = n.resumo;
    $("#autor").value  = n.autor;
    $("#data").value   = n.data;
    $("#corpo").value  = corpoParaTexto(n.corpo);
    $("#fotoUrl").value = n.foto && n.foto.startsWith("http") ? n.foto : "";
    mostrarPreview(n.foto || "");
    cat = n.cat;
    $$("button", pick).forEach(x => x.setAttribute("aria-pressed", x.dataset.cat === cat));
    $("#formTitulo").textContent = "Editando publicação";
    $("#btnCancelar").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pintar(){
    const itens = [...BASE_NOTICIAS].sort((a,b) => b.data.localeCompare(a.data));
    $("#stTotal").textContent    = itens.filter(n => n.status !== "rascunho").length;
    $("#stRascunho").textContent = itens.filter(n => n.status === "rascunho").length;
    $("#stParceiros").textContent = BASE_PARCEIROS.length;
    $("#stHoje").textContent = itens.filter(n => n.data === new Date().toISOString().slice(0,10)).length;

    lista.innerHTML = itens.length ? itens.map(n => `
      <div class="adm-item">
        ${phHTML(n)}
        <div class="info">
          <h4>${n.titulo}</h4>
          <div class="sub">
            <span class="pill ${n.status === "rascunho" ? "dra" : "pub"}">${n.status === "rascunho" ? "Rascunho" : "No ar"}</span>
            <span>${n.catLabel}</span><span>·</span><span>${dataBr(n.data)}</span>
          </div>
        </div>
        <div class="adm-acts">
          <button data-ver="${n.id}" title="Ver no site">${I.eye}</button>
          <button data-edit="${n.id}" title="Editar">${I.edit}</button>
          <button class="del" data-del="${n.id}" title="Excluir">${I.trash}</button>
        </div>
      </div>`).join("")
      : `<p class="empty">Nenhuma publicação ainda. Comece pelo formulário acima.</p>`;
  }

  lista.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.edit) return editar(Number(b.dataset.edit));
    if (b.dataset.ver)  return window.open(`../noticia.html?id=${b.dataset.ver}`, "_blank");
    if (b.dataset.del){
      const id = Number(b.dataset.del);
      const n = BASE_NOTICIAS.find(x => x.id === id);
      if (!confirm(`Excluir “${n.titulo}”? Isso não pode ser desfeito.`)) return;
      BASE_NOTICIAS = BASE_NOTICIAS.filter(x => x.id !== id);
      salvarDados(K.n, BASE_NOTICIAS);
      toast("Publicação excluída");
      pintar();
    }
  });

  limpar();
  pintar();
}

/* ------------------------ MASTER ------------------------- */
function admMaster(){
  const lista = $("#pList");

  function pintar(){
    lista.innerHTML = BASE_PARCEIROS.length ? BASE_PARCEIROS.map((p, i) => `
      <div class="adm-item">
        <div class="info">
          <h4>${p.nome}</h4>
          <div class="sub"><span>${p.cat}</span><span>·</span><span>${p.desc}</span></div>
        </div>
        <div class="adm-acts"><button class="del" data-del="${i}" title="Remover">${I.trash}</button></div>
      </div>`).join("")
      : `<p class="empty">Nenhum parceiro cadastrado.</p>`;
  }

  $("#pAdd").addEventListener("click", () => {
    const nome = $("#pNome").value.trim();
    if (!nome){ toast("Digite o nome do parceiro."); return; }
    BASE_PARCEIROS.push({
      nome,
      cat: $("#pCat").value.trim() || "Parceiro",
      desc: $("#pDesc").value.trim() || "Empresa parceira do Maracanaú News."
    });
    salvarDados(K.p, BASE_PARCEIROS);
    $("#pNome").value = $("#pCat").value = $("#pDesc").value = "";
    toast("Parceiro adicionado");
    pintar();
  });

  lista.addEventListener("click", e => {
    const b = e.target.closest("button[data-del]"); if (!b) return;
    const i = Number(b.dataset.del);
    if (!confirm(`Remover ${BASE_PARCEIROS[i].nome}?`)) return;
    BASE_PARCEIROS.splice(i, 1);
    salvarDados(K.p, BASE_PARCEIROS);
    toast("Parceiro removido");
    pintar();
  });

  // configurações
  const campos = ["logo","whatsappGrupo","whatsappCanal","whatsappDireto","email","instagram","keepo","seguidores","posts","senhaPainel"];
  campos.forEach(c => { const el = $("#cfg_" + c); if (el) el.value = SITE[c] || ""; });

  $("#cfgSalvar").addEventListener("click", () => {
    const novo = {};
    campos.forEach(c => {
      const el = $("#cfg_" + c); if (!el) return;
      const v = el.value.trim();
      if (v || c === "logo") novo[c] = v;
    });
    Object.assign(SITE, novo);
    salvarDados(K.c, novo);
    aplicarLogo();
    toast("Configurações salvas");
  });

  // logotipo
  const logoPrev = $("#logoPreview");
  const mostrarLogo = src => {
    logoPrev.innerHTML = src ? `<img src="${src}" alt="">` : "";
    logoPrev.style.display = src ? "block" : "none";
  };
  mostrarLogo(caminhoLogo());

  $("#logoArquivo")?.addEventListener("change", async e => {
    const f = e.target.files[0]; if (!f) return;
    if (f.size > 900 * 1024){ toast("Use um PNG de até 900 KB."); e.target.value = ""; return; }
    const b64 = await lerArquivo(f);
    $("#cfg_logo").value = b64;
    mostrarLogo(b64);
    toast("Logotipo carregado. Agora salve os ajustes.");
  });
  $("#cfg_logo")?.addEventListener("input", e => mostrarLogo(e.target.value.trim()));
  $("#logoRemover")?.addEventListener("click", () => {
    $("#cfg_logo").value = "";
    mostrarLogo("");
    toast("Voltou para o monograma MN ao salvar.");
  });

  // backup
  $("#exportar").addEventListener("click", () => {
    const dump = JSON.stringify({ noticias: BASE_NOTICIAS, parceiros: BASE_PARCEIROS, config: lerDados(K.c, {}) }, null, 2);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([dump], { type: "application/json" }));
    a.download = `maracanau-news-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  $("#importar").addEventListener("change", async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (d.noticias)  { BASE_NOTICIAS  = d.noticias;  salvarDados(K.n, BASE_NOTICIAS); }
      if (d.parceiros) { BASE_PARCEIROS = d.parceiros; salvarDados(K.p, BASE_PARCEIROS); }
      if (d.config)    { salvarDados(K.c, d.config); }
      toast("Backup restaurado");
      setTimeout(() => location.reload(), 900);
    } catch { toast("Arquivo inválido."); }
  });

  $("#zerar").addEventListener("click", () => {
    if (!confirm("Isso apaga tudo que foi publicado pelo painel e volta ao conteúdo de exemplo. Continuar?")) return;
    [K.n, K.p, K.c].forEach(k => localStorage.removeItem(k));
    location.reload();
  });

  pintar();
}
// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Comece por AQUI",
    href: "/comece-aqui",
    noLink: true,
    items: [
      { title: "Introdução", href: "/introducao" },
      {
        title: "Forma de Uso",
        href: "/forma-de-uso",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
      { title: "Guia Rápido", href: "/guia-rapido" },
      {
        title: "FAQ",
        href: "/faq",
      },
      { title: "Revisões", href: "/revisoes" },
    ],
  },
  {
    title: "Abordagem BizDevOps",
    href: "/bizdevops",
    noLink: true,
    items: [
      { title: "Alinhamento Estratégico", href: "/alinhamento-estrategico" },
      { title: "Eficiência Operacional", href: "/eficiencia-operacional" },
      { title: "Governança e Gestão", href: "/governanca-e-gestao" },
      { title: "Experiência do Cliente", href: "/eficiencia-do-cliente" },
      { title: "Aplicação Setorial", href: "/aplicacao-setorial" },
    ],
  },
  {
    title: "Estratégia de Negócios",
    href: "/estrategia-de-negocios",
    noLink: true,
    items: [
      { title: "Novos Negócios", href: "/use-session" },
      { title: "Planejamento", href: "/use-fetch" },
      { title: "Competitividade", href: "/use-auth" },
      { title: "Execução", href: "/use-product" },
      { title: "Métricas", href: "/use-order" },
      { title: "Sustentabilidade", href: "/use-cart" },
      { title: "Benchmarking", href: "/use-payment" },
    ],
  },
  {
    title: "Governança Digital",
    href: "/governanca-digital",
    noLink: true,
    items: [
      { title: "Governança", href: "/governanca" },
      { title: "Gestão", href: "/gestao" },
      { title: "Transformação", href: "/transformacao" },
      { title: "Inovação", href: "/inovacao" },
      { title: "Projetos", href: "/projetos" },
      { title: "Operações", href: "/operacoes" },
      {
        title: "Produtos",
        href: "/produtos",
        items: [
          { title: "Introdução", href: "/layouts" },
          { title: "Integrations", href: "/integrations" },
          {
            title: "Manual",
            href: "/manual",
            items: [
              { title: "Introdução", href: "/javascript" },
              { title: "Typescript", href: "/typescript" },
              { title: "Golang", href: "/golang" },
            ],
          },
        ],
      },
      { title: "Serviços", href: "/servicos" },
      { title: "Dados", href: "/dados" },
      { title: "Conhecimento", href: "/conhecimento" },
    ],
  },
  {
    title: "A Tríade do Sucesso",
    href: "/triade-do-sucesso",
    noLink: true,
    items: [
      { title: "Pessoas", href: "/pessoas" },
      { title: "Processos", href: "/processos" },
      { title: "Tecnologia", href: "/tecnologia" },
    ],
  },
  {
    title: "Desempenho e Resultados",
    href: "/desempenho-e-resultados",
    noLink: true,
    items: [
      {
        title: "Contextuais",
        href: "/contextual",
        items: [
          { title: "Análise do Público", href: "/layouts" },
          { title: "Análise Social", href: "/integrations" },
          {
            title: "Análise Cultural",
            href: "/manual",
            items: [
              { title: "JavaScript", href: "/javascript" },
              { title: "Typescript", href: "/typescript" },
              { title: "Golang", href: "/golang" },
            ],
          },
        ],
      },
      { title: "Transacionais", href: "/transacional" },
      { title: "Organizacionais", href: "/organizacional" },
    ],
  },
  {
    title: "Outros (diversos)",
    href: "/outros-diversos",
    noLink: true,
    items: [
      { title: "Exemplos de indicadores", href: "/exemplo-indicadores" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

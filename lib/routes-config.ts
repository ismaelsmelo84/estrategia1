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
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introdução", href: "/introduction" },
      {
        title: "Forma de Uso",
        href: "/installation",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
      { title: "Guia Rápido", href: "/quick-start-guide" },
      {
        title: "FAQ",
        href: "/faq",
      },
      { title: "Revisões", href: "/changelog" },
    ],
  },
  {
    title: "Abordagem BizDevOps",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "Alinhamento Estratégico", href: "/getToken" },
      { title: "Eficiência Operacional", href: "/getToken" },
      { title: "Governança e Gestão", href: "/getToken" },
      { title: "Experiência do Cliente", href: "/getToken" },
      { title: "Aplicação Setorial", href: "/getToken" },
    ],
  },
  {
    title: "Estratégia de Negócios",
    href: "/react-hooks",
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
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "Governança", href: "/getSession" },
      { title: "Gestão", href: "/getToken" },
      { title: "Transformação", href: "/getRole" },
      { title: "Inovação", href: "/getRole" },
      { title: "Projetos", href: "/getRole" },
      { title: "Operações", href: "/getRole" },
      {
        title: "Produtos",
        href: "/project-structure",
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
      { title: "Serviços", href: "/getRole" },
      { title: "Dados", href: "/getRole" },
      { title: "Conhecimento", href: "/getRole" },
    ],
  },
  {
    title: "A Tríade do Sucesso",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "Pessoas", href: "/getSession" },
      { title: "Processos", href: "/getToken" },
      { title: "Tecnologia", href: "/getRole" },
    ],
  },
  {
    title: "Desempenho e Resultados",
    href: "/server-actions",
    noLink: true,
    items: [
      {
        title: "Contextuais",
        href: "/project-structure",
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
      { title: "Transacionais", href: "/getSession" },
      { title: "Organizacionais", href: "/getToken" },
    ],
  },
  {
    title: "Outros (diversos)",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "Exemplos de indicadores", href: "/getSession" },
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

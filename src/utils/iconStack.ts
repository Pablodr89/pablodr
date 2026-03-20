export function getIconStack(tech: string) {
  switch (tech) {
    case "Frontend":
      return "code";
    case "UI/Styling":
      return "palette";
    case "Componentes y Design Systems":
      return "token";
    case "Estado y Datos":
      return "hub";
    case "Backend":
      return "dns";
    case "Base de Datos":
      return "database";
    case "SEO y Rendimiento Web":
      return "speed";
    case "Testing":
      return "fact_check";
    case "Herramientas IA":
      return "ai";
    case "Control de Versiones":
      return "account_tree";
    case "CI/CD y DevOps":
      return "launch";
    default:
      return "default";
  }
}

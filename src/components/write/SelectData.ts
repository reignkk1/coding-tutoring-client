class SeletItem {
  name;
  value;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export const on_off = [
  new SeletItem("온라인", "ONLINE"),
  new SeletItem("오프라인", "OFFLINE"),
];

export const subjects = [
  new SeletItem("All", ""),
  new SeletItem("JavaScript", "JAVASCRIPT"),
  new SeletItem("TypeScript", "TYPESCRIPT"),
  new SeletItem("React", "REACT"),
  new SeletItem("Spring", "SPRING"),
  new SeletItem("Node.js", "NODEJS"),
  new SeletItem("Java", "JAVA"),
  new SeletItem("Next.js", "NEXTJS"),
  new SeletItem("Nest.js", "NESTJS"),
  new SeletItem("Go", "GO"),
  new SeletItem("C", "C"),
  new SeletItem("Python", "PYTHON"),
  new SeletItem("Django", "DJANGO"),
  new SeletItem("Swift", "SWIFT"),
  new SeletItem("Kotlin", "KOTLIN"),
  new SeletItem("MySQL", "MYSQL"),
  new SeletItem("php", "PHP"),
  new SeletItem("GraphQL", "GRAPHQL"),
  new SeletItem("Firebase", "FIREBASE"),
  new SeletItem("ReactNative", "REACTNATIVE"),
  new SeletItem("Unity", "UNITY"),
  new SeletItem("Flutter", "FLUTTER"),
  new SeletItem("AWS", "AWS"),
  new SeletItem("Kubernetes", "KUBERNETES"),
  new SeletItem("Docker", "DOCKER"),
  new SeletItem("Git", "GIT"),
  new SeletItem("Figma", "FIGMA"),
  new SeletItem("Zeplin", "ZEPLIN"),
];
